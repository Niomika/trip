import { HomeComponent } from './home/home.component';
import { TripsComponent } from './trips/trips.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoopingCartComponent } from './shooping-cart/shooping-cart.component';
import { AddNewDataComponent } from './add-new-data/add-new-data.component';
import { DetailedTripComponent } from './detailed-trip/detailed-trip.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthGuard } from './auth-guard';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignUpComponent },
  {
    path: 'home', component: HomeComponent, canActivate: [AuthGuard], children: [
      { path: '', redirectTo: 'trips', pathMatch: 'full' },
      { path: 'cart', component: ShoopingCartComponent },
      { path: 'addnewdata', component: AddNewDataComponent },
      { path: 'trip/:id', component: DetailedTripComponent },
      { path: 'trips', component: TripsComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


