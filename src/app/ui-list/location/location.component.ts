import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Lokasi, Area, Negara } from '../../shared/interfaces';
import { ListService } from '../list.service';

@Component({
  selector: 'app-location-list',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
