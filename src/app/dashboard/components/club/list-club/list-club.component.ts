import { Component, OnInit, ViewChild } from '@angular/core';
import { Club } from 'src/app/dashboard/interfaces/club';
import { ClubService } from '../../../services/club.service';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PopapClubComponent } from '../popap-club/popap-club.component';

@Component({
  selector: 'dashboard-list-club',
  templateUrl: './list-club.component.html',
  styleUrls: ['./list-club.component.css']
})
export class ListClubComponent implements OnInit {

  clubList !: Club[];
  dataSource: any;
  displayedColumns: string[]= ["Nombre","Tecnico","Ciudad","Accion"];

  @ViewChild(MatPaginator) paginator !: MatPaginator;

  constructor(private service:ClubService, private dialog:MatDialog){}

  MostrarClub(){
    this.service.getClub().subscribe(res=>{
       this.clubList= res;
       this.dataSource = new MatTableDataSource<Club>(this.clubList);
       this.dataSource.paginator = this.paginator;
    });
  }

  filterChange(data:Event){
    const value=(data.target as HTMLInputElement).value;
    this.dataSource.filter = value.trim();
  }

  EditarClub(id:number){
    this.openPopUp(id);
  }
  AgregarClub(){
    this.openPopUp(0);
  }
  EliminarClub(id:number){
     this.service.deleteClub(id).subscribe(res=>{
        this.MostrarClub();
     })
  }

  openPopUp(id?:number){
    var _popup=this.dialog.open(PopapClubComponent, {
      width:'60%',
      enterAnimationDuration:'1000ms',
      exitAnimationDuration:'1000ms',
      data:{
        title: 'Formulario clubes',
        id: id,
      }
    });
    _popup.afterClosed().subscribe(item=>{
      this.MostrarClub();
    });
  }

  ngOnInit(): void {
    this.MostrarClub();
  }

}
