import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partie3',
  templateUrl: './partie3.component.html',
  styleUrls: ['./partie3.component.css']
})
export class Partie3Component implements OnInit {
mois=12;

verif(mois){
return Math.trunc(mois/3);
}
  constructor() { }

  ngOnInit() {
  }

}
