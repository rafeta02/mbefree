import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutAfterLoginComponent } from './layout-after-login/layout-after-login.component';
import { FaqComponent } from './faq/faq.component';
import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';

@NgModule({
  imports: [
    CommonModule,
    CardModule,
    AccordionModule
  ],
  declarations: [LayoutComponent, FooterComponent, LayoutAfterLoginComponent, FaqComponent],
  exports: [LayoutComponent, LayoutAfterLoginComponent, FaqComponent]
})
export class UiProfileModule { }
