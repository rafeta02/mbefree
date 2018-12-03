import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import { Lokasi, Area, Negara, Continent, Destination, Lang, Location } from '../../shared/interfaces';
import { ListService } from '../list.service';

@Component({
  selector: 'app-layout-list',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  // locations: Lokasi[];
  // areas: Area[];
  // country: Negara[];
  menu: number = 0;
  locations: Location[];
  populars: Location[];
  continents: Continent[];
  destinations : Destination[];
  token: string;
  id_continent: number;
  lang: string;
  cur: string;
  cookieValue = 'UKNOWN';

  constructor(private listService: ListService, public router: Router, public cookie: CookieService) { }

  ngOnInit() {
    const email = "vena.kurnia.sari@gmail.com";
    const password = "123456";

    this.listService.getUserDetails(email, password).subscribe(data => {
      this.token = data.token;
      this.cookie.set('token', this.token);

      this.listService.getLocation(this.token).subscribe(data => {
        this.lang = data.data.lang;
        this.cur = data.data.currency;
        this.cookie.set('lang', this.lang);
        this.cookie.set('currency', this.cur);

        //console.log(this.lang, this.cur);

        this.listService.getPopularLocations(this.token, this.lang).subscribe(data => {
          console.log(data);
          this.populars = data.data;
          //console.log(this.locations);
        })
      })

      this.listService.getContinents(this.token).subscribe(data => {
          this.continents = data.data;
          //console.log(this.continents);
        },
        err => {
          console.log(err);
        }
      );

      this.listService.getDestinations(this.token).subscribe(data => {
        this.destinations = data.data;
        this.id_continent = data.data[0].id_continent;
        //console.log(this.id_continent);
        //console.log(this.destinations);

        this.listService.getCountries(this.token, this.id_continent).subscribe(data => {
          //console.log(data);
        },
          err => {
            console.log(err);
          }
        );

      },
        err => {
          console.log(err);
        }
      );

    })
    
    // this.listService.getContinents(this.token).subscribe(
    //   (data: Area[]) => {
    //     this.areas = data;
    //     console.log(this.areas);
    //   },
    //   err => {
    //     console.log(err);
    //   }
    // )
    

    // this.listService.getLocations().subscribe(
    //   (data: Lokasi[]) => {
    //     this.locations = data;
    //     console.log(this.locations);
    //   },
    //   err => {
    //     console.log(err);
    //   }
    // )

    // this.listService.getContinents().subscribe(
    //   (data: Area[]) => {
    //     this.areas = data;
    //     console.log(this.areas);
    //   },
    //   err => {
    //     console.log(err);
    //   }
    // )
  }

  onSelect(lokasi: number): void{
    console.log(lokasi);
    this.router.navigateByUrl('/activity/' + lokasi);
    //console.log(this.cookieValue);
  }

  onMenu(continent_id: number): void{
    //console.log(area);
    this.menu = continent_id;
    console.log(this.menu);
    this.listService.getLocationsByContinent(this.token, continent_id).subscribe(data => {
      this.locations = data.data;
      console.log(data);
    },
      err => {
        console.log(err);
      }
    );
    //this.router.navigateByUrl('/list/detail/'+ area);
  }

  onMenuSemua(): void{
    this.menu = 0;
  }
  
}
