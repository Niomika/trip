import { TripsComponent } from './trips/trips.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoopingCartComponent } from './shooping-cart/shooping-cart.component';
import { NewTripComponent } from './new-trip/new-trip.component';
import { DetailedTripComponent } from './detailed-trip/detailed-trip.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'trips', component: TripsComponent},
  {path: 'home', component: SignInComponent},
  {path: 'cart', component: ShoopingCartComponent},
  {path: 'newTrip', component: NewTripComponent},
  { path: 'trip/:id', component: DetailedTripComponent},
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignUpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


