import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Injectable} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideComponent } from './side/side.component';
import { TodoComponent } from './todo/todo.component';
import { DataCenterService } from './data-center.service';

@NgModule({
  declarations: [
    AppComponent,
    SideComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataCenterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
