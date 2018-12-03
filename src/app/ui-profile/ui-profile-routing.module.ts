import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { LayoutAfterLoginComponent } from './layout-after-login/layout-after-login.component';
import { FaqComponent } from './faq/faq.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'profile',
    children: [
      { path: '', component: LayoutAfterLoginComponent },
      { path: 'login', component: LayoutComponent },
      { path: 'faq', component: FaqComponent },
    ]
  },
  {
    path: 'login',
    children: [
      { path: '', component: LoginComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class UiProfileRoutingModule { }
