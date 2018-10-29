import { Component, OnInit } from '@angular/core';

import { Lokasi, Area, Negara } from '../../shared/interfaces';
import { ListService } from '../list.service';

@Component({
  selector: 'app-layout-list',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  locations: Lokasi[];
  areas: Area[];
  country: Negara[];

  constructor(private listService : ListService) { }

  ngOnInit() {
    this.listService.getLocations().subscribe(
      (data: Lokasi[]) => {
        this.locations = data;
        console.log(this.locations);
      },
      err => {
        console.log(err);
      }
    )

    this.listService.getContinents().subscribe(
      (data: Area[]) => {
        this.areas = data;
        console.log(this.locations);
      },
      err => {
        console.log(err);
      }
    )
  }

  
}
