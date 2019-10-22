import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partie01',
  templateUrl: './partie01.component.html',
  styleUrls: ['./partie01.component.css']
})
export class Partie01Component implements OnInit {
tab=[15,46,0,89,80];
  constructor() { }

  ngOnInit() {
  }

  onPosition( x) {
    console.log(x);
  }

}
