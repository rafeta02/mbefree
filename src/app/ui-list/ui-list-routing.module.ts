import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {
    path: 'list',
    children: [
      { path: '', component: LayoutComponent },
      { path: 'detail/', component: DetailComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class UiListRoutingModule { }
