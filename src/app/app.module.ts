import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Partie1Component } from './partie1/partie1.component';
import { FormsModule } from '@angular/forms';
import { Partie01Component } from './partie01/partie01.component';
import { Partie02Component } from './partie02/partie02.component';
import { Partie2Component } from './partie2/partie2.component';
import { Partie2p2Component } from './partie2p2/partie2p2.component';
@NgModule({
  declarations: [
    AppComponent,
    Partie1Component,
    Partie01Component,
    Partie02Component,
    Partie2Component,
    Partie2p2Component
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
