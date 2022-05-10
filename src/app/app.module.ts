import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { EditstudentComponent } from './editstudent/editstudent.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter'

@NgModule({
  declarations: [
    AppComponent,
    AddstudentComponent,
    EditstudentComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,HttpClientModule,AppRoutingModule
    ,Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
