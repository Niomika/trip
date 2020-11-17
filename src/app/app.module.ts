import { AuthService } from './services/auth.service';
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
import { AddNewDataComponent } from './add-new-data/add-new-data.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ShoopingCartComponent } from './shooping-cart/shooping-cart.component';
import { ShoopingCartItemComponent } from './shooping-cart-item/shooping-cart-item.component';
import { DetailedTripComponent } from './detailed-trip/detailed-trip.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { CommentComponent } from './comment/comment.component';
import { ChartModule } from 'primeng/chart';



@NgModule({
  declarations: [
    AppComponent,
    TripsComponent,
    NavbarComponent,
    TripComponent,
    RatingComponent,
    AddNewDataComponent,
    ShoopingCartComponent,
    ShoopingCartItemComponent,
    DetailedTripComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule,
    ChartModule

  ],
  providers: [TripsService, ShoopingCartService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
