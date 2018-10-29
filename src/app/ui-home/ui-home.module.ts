import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';3
import { SliderModule } from 'angular-image-slider';
import { BrowserModule } from '@angular/platform-browser';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { UiHomeRoutingModule } from './ui-home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    BrowserModule,
    BrowserAnimationsModule,
    SliderModule,
    UiHomeRoutingModule
  ],
  declarations: [FooterComponent, LayoutComponent],
  exports: [LayoutComponent]
})
export class UiHomeModule { }
