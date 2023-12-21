import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Ranking } from 'src/app/dashboard/interfaces/ranking';
import { RankingService } from 'src/app/dashboard/services/ranking.service';
import { PopapRankingComponent } from '../popap-ranking/popap-ranking.component';

@Component({
  selector: 'dashboard-list-ranking',
  templateUrl: './list-ranking.component.html',
  styleUrls: ['./list-ranking.component.css']
})
export class ListRankingComponent implements OnInit{

  rankingList !: Ranking[];
  dataSource: any;
  displayedColumns: string[]= ["Id Deportista","Bloqueos","Ataques","Defensas","Servicios","Canastas","Goles","Atajadas","Accion"];

  @ViewChild(MatPaginator) paginator !: MatPaginator;

  constructor(private service:RankingService, private dialog:MatDialog){}

  MostrarRanking(){
    this.service.getRanking().subscribe(res=>{
       this.rankingList= res;
       this.dataSource = new MatTableDataSource<Ranking>(this.rankingList);
       this.dataSource.paginator = this.paginator;
    });
  }

  filterChange(data:Event){
    const value=(data.target as HTMLInputElement).value;
    this.dataSource.filter = value.trim();
  }

  EditarRanking(id:number){
    this.openPopUp(id);
  }
  AgregarRanking(){
    this.openPopUp(0);
  }
  EliminarRanking(id:number){
     this.service.deleteRanking(id).subscribe(res=>{
        this.MostrarRanking();
     })
  }
  openPopUp(id?:number){
    var _popup=this.dialog.open(PopapRankingComponent, {
      width:'60%',
      enterAnimationDuration:'1000ms',
      exitAnimationDuration:'1000ms',
      data:{
        title: 'Formulario rankings',
        id: id,
      }
    });
    _popup.afterClosed().subscribe(item=>{
      this.MostrarRanking();
    });
  }

  ngOnInit(): void {
    this.MostrarRanking();
  }


}
