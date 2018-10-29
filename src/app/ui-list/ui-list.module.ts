import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { UiListRoutingModule } from './ui-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    UiListRoutingModule
  ],
  declarations: [FooterComponent, LayoutComponent],
  exports: [LayoutComponent]
})
export class UiListModule { }
