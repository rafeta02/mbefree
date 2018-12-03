import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Lokasi, Area, Negara } from '../../shared/interfaces';
import { ListService } from '../list.service';

@Component({
  selector: 'app-detail-list',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

code : string;
isActive : boolean;
place : Lokasi[];
areas: Area[];
country: Negara[];

  constructor(private activeRouter: ActivatedRoute, private listService: ListService, public router: Router) { }

  ngOnInit() {
    this.activeRouter.paramMap.subscribe((route: any) => {
      this.code = route.params.id;
      console.log(this.code);
    });
  }

  onMenu(area: string): void {
    this.router.navigateByUrl('/list/detail/' + area);
  }

}
