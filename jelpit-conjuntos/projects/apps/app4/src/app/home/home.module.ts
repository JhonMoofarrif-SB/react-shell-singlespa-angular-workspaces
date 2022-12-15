import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AComponent } from '../a/a.component';
import { BComponent } from '../b/b.component';
import { HomeRoutingModule } from './home-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeComponent, AComponent,BComponent],
  imports: [CommonModule,HomeRoutingModule, RouterModule],
  exports:[HomeComponent]
})
export class HomeModule {}
