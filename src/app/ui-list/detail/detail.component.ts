import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Lokasi, Area, Negara } from '../../shared/interfaces';
import { ListService } from '../list.service';

@Component({
  selector: 'app-detail-list',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private listService: ListService
  ) { }

  ngOnInit() {
  }

}
