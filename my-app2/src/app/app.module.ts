import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { SharedService } from './Services/shared.service';
import { LoginService } from './Services/login.service';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { routes } from './app.routes';
import { SigninService } from './Services/signin.service';
import { StreamService } from './Services/stream.service';
import { MyObservableComponent } from './my-observable/my-observable.component';
import { CallapiService } from './Services/callapi.service';
import { HttpClientModule } from '@angular/common/http';
import { CallapihttpComponent } from './callapihttp/callapihttp.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PageNotFoundComponent,
    MyObservableComponent,
    CallapihttpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [LoginService, SharedService, SigninService, StreamService, CallapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
