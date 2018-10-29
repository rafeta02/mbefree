import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {
    path: '',
    loadChildren: './ui-profile/ui-profile.module#UiProfileModule'
  },
  {
    path: '',
    loadChildren: './ui-home/ui-home.module#UiHomeModule'
  },
  {
    path: '',
    loadChildren: './ui-list/ui-list.module#UiListModule'
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
