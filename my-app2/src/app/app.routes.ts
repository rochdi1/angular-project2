import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MyObservableComponent } from './my-observable/my-observable.component';
import { CallapihttpComponent } from './callapihttp/callapihttp.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home/:email', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'observable', component: MyObservableComponent },
  { path: 'callapi', component: CallapihttpComponent },
  { path: '**', component: PageNotFoundComponent }
];
