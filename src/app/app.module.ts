import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing'; 

import { HomeModule } from './home/home.module';

import { ClubeService } from './modules/clube/clube.service'
import { JogadorService } from './modules/jogador/jogador.service'

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
  CommonModule,
    AppRoutingModule,

    HomeModule
  ],
  declarations: [AppComponent],
  providers: [ClubeService, JogadorService],
  bootstrap: [AppComponent],
})
export class AppModule { }
