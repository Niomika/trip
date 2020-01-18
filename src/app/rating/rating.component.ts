import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Trip } from '../trip';
import { AuthService } from '../services/auth.service';
import { TripsService } from '../services/trips.service';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input() rating: number;
  @Input() trip: Trip;
  @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>();

  canRate = false;
  isLoaded = false;
  constructor(private auth: AuthService, private tripsService: TripsService, private orderService: OrdersService) { }

  ngOnInit() {
    this.rating=this.trip.rating;
    this.checkIfCanRate();
  }

  onClick(rating: number): void {
    if (this.canRate) {
      this.rating = rating;
      this.ratingClick.emit({
        rating: rating
      });
    }
  }

  checkIfCanRate() {
    this.orderService.getOrdersByUserEmail(this.auth.getUser().email).subscribe(orders => {
      console.log(orders);
      console.log(this.trip.id);
      orders.forEach(order => {
        if (order.trip_id === this.trip.id) {
          this.canRate = true;
                    this.isLoaded = true;
          return;
        }
        
      });
      
      this.isLoaded = true;
    });
  }

}
