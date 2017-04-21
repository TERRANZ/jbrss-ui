import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards/index';
import { AuthenticationService, FeedService, FeedPosts, UserService } from './_services/index';
import { BaseRequestOptions } from '@angular/http';
import { FeedpostsComponent } from './feedposts/feedposts.component';
import { AddPageComponent } from './addpage/addpage.component';
import { Component } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    FeedpostsComponent,
    AddPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    FeedService,
    BaseRequestOptions,
    FeedPosts,
    UserService,
    [{provide: APP_BASE_HREF, useValue: '/jbrss'}]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
