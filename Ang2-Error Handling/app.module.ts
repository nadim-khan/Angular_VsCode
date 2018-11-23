import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './emp-list.component';
import { EmployeeDetailsComponent } from './emp-details.component';
import { HttpModule } from '@angular/http';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, HttpModule ],
  declarations: [ AppComponent, EmployeeListComponent, EmployeeDetailsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
