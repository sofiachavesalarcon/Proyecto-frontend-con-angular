import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeportistaComponent } from './components/deportista/deportista.component';
import { DeporteComponent } from './components/deporte/deporte.component';
import { ClubComponent } from './components/club/club.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';


const routes: Routes = [
  { path: 'dashboard', component:NavBarComponent,
  children: [
    { path: 'deportista', component: DeportistaComponent},
    { path: 'deporte', component: DeporteComponent},
    { path: 'club', component: ClubComponent},
    { path: 'ranking', component: RankingComponent},
    { path: 'contacto', component:ContactoComponent},
    { path: 'catalogo', component: CatalogoComponent},
  ]},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
