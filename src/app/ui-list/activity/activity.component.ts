import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { map  } from 'rxjs/operators';

import { MenuActivity } from '../../shared/interfaces';
import { ListService } from '../list.service';
import { ActivityService } from '../activity.service';


interface Produk {
  id: number;
  produk_nama: string;
  produk_nama_en: string;
  produk_nama_id: string;
  instan: number;
  ribbon: string;
  buy_total: number;
  cur_code: string;
  cur_rate: number;
  publish_price: number;
  produk_price: number;
  slug: string;
  rating: number;
  img: string;
}
interface Location {
  id: number;
  nama_lokasi: string;
  nama_lokasi_en: string;
  nama_lokasi_id: string;
  slug_lokasi: string;
  pic_lokasi: string;
  icon: string;
  pic_detail_header: string;
}

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})

export class ActivityComponent implements OnInit {

  token: string;
  lang: string;
  cur: string;
  idLocation: number;
  menu: number = 0;
  menuActivity: MenuActivity[];
  lokasi: Location;
  page: number = 1;
  products: Produk[];
  produckSem: Produk[];
  category: number;
  showed: number = 0;

  constructor(private listService: ListService, private actService: ActivityService, public router: Router, public cookie: CookieService, private activeRouter: ActivatedRoute) { }

  ngOnInit() {
    this.token = this.cookie.get('token');
    this.lang = this.cookie.get('lang');
    this.cur = this.cookie.get('currency');

    this.activeRouter.paramMap.subscribe((route: any) =>{
      this.idLocation = route.params.id;
      //console.log(this.idLocation);
    })

    this.actService.getMenuActivity(this.token).subscribe(data => {
      this.menuActivity = data.data;
      //console.log(this.menuActivity);
    },
      err => {
        console.log(err);
      }
    );
    
    this.actService.getProductByLocation(this.token, this.lang, this.cur, this.idLocation).subscribe(data => {
      this.products = data.data.data;
      //console.log(this.products);
    });

    this.actService.getLocationById(this.token, this.idLocation).subscribe(data => {
      this.lokasi = data.data;
    })

  }

  showMore(): void {
    this.page++;
    if(this.menu == 0){
      this.actService.getProductByLocationPaginate(this.token, this.lang, this.cur, this.idLocation, this.page).subscribe(data => {
        this.produckSem = data.data.data;
        if(this.produckSem.length > 0){
          this.produckSem.forEach(element => {
            this.products.push(element);
          });
        }else{
          this.showed = 1;
        }
      });
    }else{
      this.actService.getProductByLocationWithCategoryPaginate(this.token, this.lang, this.cur, this.idLocation, this.category, this.page)
        .subscribe(data => {
          this.produckSem = data.data.data;
          if(this.produckSem.length > 0){
            this.produckSem.forEach(element => {
              this.products.push(element);
            });
          }else{
            this.showed = 1;
          }
        });
    }
  }

  onMenuSemua(): void {
    this.menu = 0;
    this.page = 1;
    this.showed = 0;
    this.actService.getProductByLocation(this.token, this.lang, this.cur, this.idLocation).subscribe(data => {
      this.products = data.data.data;
      //console.log(this.products);
    });
  }

  onMenu(id_category: number): void {
    this.menu = id_category;
    this.page = 1;
    this.showed = 0;
    this.category = id_category;
    console.log(this.menu);
    this.actService.getProductByLocationWithCategory(this.token, this.lang, this.cur, this.idLocation, this.category).subscribe(data => {
      this.products = data.data.data;
      //console.log(this.products);
    });
  }

  sortProduct(test: any): void {
    console.log(this.products);
    if(test === "popular"){
      this.products.sort(function (a, b){
        return b.buy_total - a.buy_total;
      });
      console.log(this.products);
    }else if(test === "latest") {
      this.products.sort(function (a, b) {
        return b.id - a.id;
      });
      console.log(this.products);
    }else if(test === "sales") {
      this.products.sort(function (a, b) {
        return b.buy_total - a.buy_total;
      });
    }
  }

  arrayOne(n: number): any[] {
    const index = Math.round(n);
    return Array(index);
  }

}
