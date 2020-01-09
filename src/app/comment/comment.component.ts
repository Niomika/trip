import { OrdersService } from './../services/orders.service';
import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Trip } from '../trip';
import { TripsService } from '../services/trips.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  comment: string;
  name: string;
  comments: Comment[];
  @Input() trip: Trip;
  userService: any;
  shoppingCart: any;

  isLoaded = false;
  canComment = false;

  constructor(private auth: AuthService, private tripsService: TripsService, private orderService: OrdersService) { }

  ngOnInit() {
    this.tripsService.getComments(this.trip.id).subscribe((comments: Comment[]) => {
      this.comments = comments;
      this.checkIfCanComment();
    });
  }

  addComment() {
    if (!this.comment) { return; }
    this.auth.getUsers().subscribe(users => {
      users.forEach(user => {
        if (user.email === this.auth.getUser().email) {
          this.auth.setUser(user);
          const comment = { mail: user.email, trip_id: this.trip.id, name: this.name, text: this.comment } as unknown as Comment;
          this.tripsService.addComment(comment);
        }
      });
      this.comment = '';
    });
  }

  checkIfCanComment() {
    this.orderService.getOrdersByUserEmail(this.auth.getUser().email).subscribe(orders => {
      console.log(orders);
      console.log(this.trip.id);
      orders.forEach(order => {
        if (order.trip_id === this.trip.id){
          this.canComment = true;
          this.isLoaded = true;
          return;
        }
      });
      this.isLoaded = true;
    });
  }
}
