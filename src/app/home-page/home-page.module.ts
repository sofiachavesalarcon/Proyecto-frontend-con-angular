import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LoginComponent } from './components/login/login.component';
import { MaterialModule } from '../material.module';
import { ContentComponent } from './components/content/content.component';
import { DeportistaCardComponent } from './components/deportista-card/deportista-card.component';


@NgModule({
  declarations: [
    NavigationComponent,
    LoginComponent,
    ContentComponent,
    DeportistaCardComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    MaterialModule,
  ],
  exports: [
    NavigationComponent,
    LoginComponent,
    ContentComponent,
    DeportistaCardComponent
  ]
})
export class HomePageModule { }
