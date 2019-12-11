import { ShoopingCartService } from './services/shooping-cart.service';
import { TripsService } from './services/trips.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TripsComponent } from './trips/trips.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TripComponent } from './trip/trip.component';
import { RatingComponent } from './rating/rating.component';
import { NewTripComponent } from './new-trip/new-trip.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ShoopingCartComponent } from './shooping-cart/shooping-cart.component';
import { ShoopingCartItemComponent } from './shooping-cart-item/shooping-cart-item.component';
import { MaxPricePipe } from './pipes/max-price.pipe';
import { MinPricePipe } from './pipes/min-price.pipe';
import { DestinationPipe } from './pipes/destination.pipe';
import { StartDatePipe } from './pipes/start-date.pipe';
import { FinishDatePipe } from './pipes/finish-date.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TripsComponent,
    NavbarComponent,
    TripComponent,
    RatingComponent,
    NewTripComponent,
    ShoopingCartComponent,
    ShoopingCartItemComponent,
    MaxPricePipe,
    MinPricePipe,
    DestinationPipe,
    StartDatePipe,
    FinishDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [TripsService, ShoopingCartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
