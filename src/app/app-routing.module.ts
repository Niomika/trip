import { HomeComponent } from './home/home.component';
import { ChartsComponent } from './charts/charts.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNewDataComponent } from './add-new-data/add-new-data.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthGuard } from './auth-guard';
import { HealthFactorComponent } from './health-factor/health-factor.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignUpComponent },
  {
    path: 'home', component: HomeComponent, canActivate: [AuthGuard], children: [
      { path: '', redirectTo: 'charts', pathMatch: 'full' },
      { path: 'addnewdata', component: AddNewDataComponent },
      { path: 'charts', component: ChartsComponent },
      { path: 'factor', component: HealthFactorComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


