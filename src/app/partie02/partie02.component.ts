import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partie02',
  templateUrl: './partie02.component.html',
  styleUrls: ['./partie02.component.css']
})
export class Partie02Component implements OnInit {

  tab=[15,46,0,89,80];
  constructor() { }

  ngOnInit() {
  }

  onPosition( x) {
    console.log(x);
  }

}
