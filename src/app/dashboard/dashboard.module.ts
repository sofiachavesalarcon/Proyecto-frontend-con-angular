import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { ClubComponent } from './components/club/club.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { DeporteComponent } from './components/deporte/deporte.component';
import { DeportistaComponent } from './components/deportista/deportista.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { ListDeportistaComponent } from './components/deportista/list-deportista/list-deportista.component';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { PopapComponent } from './components/deportista/popap/popap.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ListDeporteComponent } from './components/deporte/list-deporte/list-deporte.component';
import { PopapDeporteComponent } from './components/deporte/popap-deporte/popap-deporte.component';
import { PopapClubComponent } from './components/club/popap-club/popap-club.component';
import { ListClubComponent } from './components/club/list-club/list-club.component';
import { ListCatalogoComponent } from './components/catalogo/list-catalogo/list-catalogo.component';
import { PopapCatalogoComponent } from './components/catalogo/popap-catalogo/popap-catalogo.component';
import { PopapRankingComponent } from './components/ranking/popap-ranking/popap-ranking.component';
import { ListRankingComponent } from './components/ranking/list-ranking/list-ranking.component';
import { ListContactoComponent } from './components/contacto/list-contacto/list-contacto.component';
import { PopapContactoComponent } from './components/contacto/popap-contacto/popap-contacto.component';




@NgModule({
  declarations: [
    CatalogoComponent,
    ClubComponent,
    ContactoComponent,
    DeporteComponent,
    DeportistaComponent,
    RankingComponent,
    ListDeportistaComponent,
    PopapComponent,
    NavBarComponent,
    ListDeporteComponent,
    PopapDeporteComponent,
    PopapClubComponent,
    ListClubComponent,
    ListCatalogoComponent,
    PopapCatalogoComponent,
    PopapRankingComponent,
    ListRankingComponent,
    ListContactoComponent,
    PopapContactoComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [
    DeportistaComponent,
    DeporteComponent,
    ClubComponent,
    RankingComponent,
    ContactoComponent,
    CatalogoComponent,
    NavBarComponent,
    PopapComponent,
    PopapDeporteComponent,
    PopapClubComponent,

  ]
})
export class DashboardModule { }
