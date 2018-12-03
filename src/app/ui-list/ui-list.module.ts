import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { UiListRoutingModule } from './ui-list-routing.module';
import { DetailComponent } from './detail/detail.component';
import { LocationComponent } from './location/location.component';
import { ActivityComponent } from './activity/activity.component';

@NgModule({
  imports: [
    CommonModule,
    UiListRoutingModule
  ],
  declarations: [FooterComponent, LayoutComponent, DetailComponent, LocationComponent, ActivityComponent],
  exports: [LayoutComponent, DetailComponent, LocationComponent, ActivityComponent]
})
export class UiListModule { }
