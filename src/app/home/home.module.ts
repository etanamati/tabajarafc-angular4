import { NgModule, OnInit } from '@angular/core';
import { HomeRoutingModule } from './home.routing';
import { HomeComponent }   from './home.component';
import { CommonModule } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';

@NgModule({
  imports: [
    HomeRoutingModule,
    CommonModule,
    BrowserModule
  ],
  exports: [],
  declarations: [HomeComponent],
})
export class HomeModule { 

}
