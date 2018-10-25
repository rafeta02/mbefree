import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-home',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  // images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  public imagesUrl;

  constructor() { }

  ngOnInit() {
    this.imagesUrl = [
      'assets/bootstrap-social.png',
      'assets/bootstrap-social.png',
      'assets/bootstrap-social.png',
      ];
  }

}
