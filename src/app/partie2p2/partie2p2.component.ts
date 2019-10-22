import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partie2p2',
  templateUrl: './partie2p2.component.html',
  styleUrls: ['./partie2p2.component.css']
})
export class Partie2p2Component implements OnInit {
mois=12;

verif(mois){
return Math.trunc(mois/3);
}
  constructor() { }

  ngOnInit() {
  }

}
