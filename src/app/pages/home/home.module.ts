import { MenuTitleComponent } from './../../components/menu-title/menu-title.component';
import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BigCardComponent } from './big-card/big-card.component';
import { SmallCardComponent } from './small-card/small-card.component';



@NgModule({
  declarations: [
    HomeComponent,
    BigCardComponent,
    SmallCardComponent,
    MenuTitleComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
