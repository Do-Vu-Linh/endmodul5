import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormcreatComponent } from './formcreat/formcreat.component';
import { LocalComponent } from './local/local.component';
import { DetailComponent } from './detail/detail.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {environment} from "../enviroment/enviroment";

let AngularFireModule;

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormcreatComponent,
    LocalComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
