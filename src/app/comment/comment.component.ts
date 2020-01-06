import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Order } from '../models/order';
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
  orderService: any;

  constructor(private auth: AuthService, private tripsService: TripsService) { }

  ngOnInit() {

    this.tripsService.getComments(this.trip.id).subscribe((comments: Comment[]) => {
      this.comments = comments;
    });
  }

  addComment() {
    if (!this.comment) { return; }
    this.userService.getUsers().subscribe(users => {
      users.forEach(user => {
        if (user.email === this.userService.getUser().email) {
          this.userService.setUser(user);
          const comment = { mail: user.email, trip_id: this.trip.id, name: this.name, text: this.comment } as unknown as Comment;
          this.tripsService.addComment(comment);

        }
      });
      this.comment = '';
    });
  }
}
