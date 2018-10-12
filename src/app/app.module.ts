import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
//import { DlDateTimePickerDateModule } from 'angular-bootstrap-datetimepicker';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';


import { AppComponent } from './app.component';
import { ViewDiscussionsComponent } from './view-discussions/view-discussions.component';
import { DiscussionFormComponent } from './discussion-form/discussion-form.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewDiscussionsComponent,
    DiscussionFormComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'viewdiscussions', component: ViewDiscussionsComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
