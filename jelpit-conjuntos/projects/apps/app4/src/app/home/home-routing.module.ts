import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AComponent } from '../a/a.component';
import { BComponent } from '../b/b.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'a',
    component:AComponent
  },
  {
    path:'b',
    component:BComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],

})
export class HomeRoutingModule {}
