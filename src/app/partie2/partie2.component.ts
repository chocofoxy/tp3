import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partie2',
  templateUrl: './partie2.component.html',
  styleUrls: ['./partie2.component.css']
})
export class Partie2Component implements OnInit {
  etudiant = {nom:'Ali',moyenne:9.85};
  tab = ['RSI','DSI','SEM'] ;
  spec = "RSI";
  constructor() { }

  ngOnInit() {
  }

}
