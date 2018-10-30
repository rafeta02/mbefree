import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { UiListRoutingModule } from './ui-list-routing.module';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  imports: [
    CommonModule,
    UiListRoutingModule
  ],
  declarations: [FooterComponent, LayoutComponent, DetailComponent],
  exports: [LayoutComponent]
})
export class UiListModule { }
