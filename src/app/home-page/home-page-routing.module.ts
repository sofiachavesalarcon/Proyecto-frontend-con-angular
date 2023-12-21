import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ContentComponent } from './components/content/content.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DeportistaCardComponent } from './components/deportista-card/deportista-card.component';

const routes: Routes = [
  {path: 'home', component:NavigationComponent,
  children: [
    {path:'content', component: ContentComponent},
    {path: 'login', component: LoginComponent},
    {path: 'deportista-card', component: DeportistaCardComponent}
  ]},
  {path: '**', redirectTo:'home/content'}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
