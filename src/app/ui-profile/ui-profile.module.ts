import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutAfterLoginComponent } from './layout-after-login/layout-after-login.component';
import { FaqComponent } from './faq/faq.component';
import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';
import { UiProfileRoutingModule } from './ui-profile-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    CardModule,
    AccordionModule,
    UiProfileRoutingModule
  ],
  declarations: [LayoutComponent, FooterComponent, LayoutAfterLoginComponent, FaqComponent, LoginComponent],
  exports: [LayoutComponent, LayoutAfterLoginComponent, FaqComponent, LoginComponent]
})
export class UiProfileModule { }
