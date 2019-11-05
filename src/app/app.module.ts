import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Partie1Component } from './partie1/partie1.component';
import { FormsModule } from '@angular/forms';
import { Partie01Component } from './partie01/partie01.component';
import { Partie02Component } from './partie02/partie02.component';
import { Partie2Component } from './partie2/partie2.component';
import { Partie4Component } from './partie4/partie4.component';
import { Partie3Component } from './partie3/partie3.component';
import { Partie5Component } from './partie5/partie5.component';
import { CustomMoyPipe } from './custom-moy.pipe';
import { CustomEtudiantNamePipe } from './custom-etudiant-name.pipe';
@NgModule({
  declarations: [
    AppComponent,
    Partie1Component,
    Partie01Component,
    Partie02Component,
    Partie2Component,
    Partie3Component,
    Partie4Component,
    Partie5Component,
    CustomMoyPipe,
    CustomEtudiantNamePipe
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
