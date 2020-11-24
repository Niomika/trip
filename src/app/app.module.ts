import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsComponent } from './charts/charts.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddNewDataComponent } from './add-new-data/add-new-data.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { ChartModule } from 'primeng/chart';
import {TabViewModule} from 'primeng/tabview';
import { TestsChartComponent } from './tests-chart/tests-chart.component';
import { BugsChartComponent } from './bugs-chart/bugs-chart.component';
import { NewAndFixedChartComponent } from './new-and-fixed-chart/new-and-fixed-chart.component';
import { TestAndBugsDataService } from './services/test-and-bugs-data.service';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HealthFactorComponent } from './health-factor/health-factor.component';



@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent,
    NavbarComponent,
    AddNewDataComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    TestsChartComponent,
    BugsChartComponent,
    NewAndFixedChartComponent,
    HealthFactorComponent
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
    ChartModule,
    TabViewModule,
    DropdownModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule

  ],
  providers: [TestAndBugsDataService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
