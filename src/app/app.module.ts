import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// it is needed when we use form functions
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PeopleService} from "./people.service";
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ChildComponent } from './child/child.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ChildComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
// Service added
  providers: [
    PeopleService,
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
