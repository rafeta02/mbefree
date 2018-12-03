import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { DetailComponent } from './detail/detail.component';
import { LocationComponent } from './location/location.component';
import { ActivityComponent } from './activity/activity.component';

const routes: Routes = [
  {
    path: 'list',
    children: [
      { path: '', component: LayoutComponent },
    ]
  }, 
  {
    path: 'activity/:id',
    children: [
      { path: '', component: ActivityComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class UiListRoutingModule { }
