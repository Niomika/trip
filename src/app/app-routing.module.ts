import { TripsComponent } from './trips/trips.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoopingCartComponent } from './shooping-cart/shooping-cart.component';
import { NewTripComponent } from './new-trip/new-trip.component';
import { DetailedTripComponent } from './detailed-trip/detailed-trip.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: TripsComponent},
  {path: 'cart', component: ShoopingCartComponent},
  {path: 'newTrip', component: NewTripComponent},
  { path: 'trip/:id', component: DetailedTripComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


