import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partie4',
  templateUrl: './partie4.component.html',
  styleUrls: ['./partie4.component.css']
})
export class Partie4Component implements OnInit {

  couleur  ;
  theme = [ { name : 'Eté' , value :'ete'} , { name : 'Standard' , value :'standard'} , { name : 'Sombre' , value : 'sombre'}] ;
  police = [ 'Arial' , 'Calibri' , 'Times New Roman'];
  selected = "sombre" ;
  font  ;

  constructor() { }

  ngOnInit() {
  }

  bindstyle(font , couleur ) {
    this.font = font ;
    this.couleur = couleur ;
  }

}
