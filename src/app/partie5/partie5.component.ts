import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partie5',
  templateUrl: './partie5.component.html',
  styleUrls: ['./partie5.component.css']
})
export class Partie5Component implements OnInit {
  etudiants = [
    {nom:'Ben Ali', prenom:'Ahmed', date:new Date(1980,4,15), ville:'Tunis', moyenne:12.37},
    {nom:'Rajhi', prenom:'Samar', date:new Date(2000,6,23), ville:'Sfax', moyenne:15.87},
    {nom:'Ammar', prenom:'Ali', date:new Date(2003,7,10), ville:'Tunis', moyenne:10.3},
    {nom:'Smiri', prenom:'Maroua', date:new Date(2001,1,11), ville:'Nabeul', moyenne:16.3}
  ] ;
  c1 = { 'color' : 'blue' } ;
  c2 = { 'color' : 'red' , 'font-weight':'bold' } ;

  constructor() { }

  ngOnInit() {
  }

  getClass ( x ) {
    return ( x > 16 ) ? this.c2 : this.c1 ;
  }

}
