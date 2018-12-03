import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UiListModule } from './ui-list/ui-list.module';
import { UiHomeModule } from './ui-home/ui-home.module';
import { UiProfileModule } from './ui-profile/ui-profile.module';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {
    path: '',
    //loadChildren: './ui-profile/ui-profile.module#UiProfileModule'
    loadChildren: () => UiProfileModule,
  },
  {
    path: '',
    //loadChildren: './ui-home/ui-home.module#UiHomeModule'
    loadChildren: () => UiHomeModule,
  },
  {
    path: '',
    //loadChildren: './ui-list/ui-list.module#UiListModule',
    loadChildren: () => UiListModule,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
