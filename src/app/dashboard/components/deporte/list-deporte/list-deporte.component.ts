import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Deporte } from 'src/app/dashboard/interfaces/deporte';
import { DeporteService } from 'src/app/dashboard/services/deporte.service';
import { PopapDeporteComponent } from '../popap-deporte/popap-deporte.component';

@Component({
  selector: 'dashboard-list-deporte',
  templateUrl: './list-deporte.component.html',
  styleUrls: ['./list-deporte.component.css']
})
export class ListDeporteComponent implements OnInit{
  deporteList !: Deporte[];
  dataSource: any;
  displayedColumns: string[]= ["Nombre","Categoria","Popularidad","Club","Accion"];

  @ViewChild(MatPaginator) paginator !: MatPaginator;

  constructor(private service:DeporteService, private dialog:MatDialog){}

  MostrarDeporte(){
    this.service.getDeporte().subscribe(res=>{
      this.deporteList= res;
      this.dataSource = new MatTableDataSource<Deporte>(this.deporteList);
      this.dataSource.paginator = this.paginator;
    });
  }

  filterChange(data:Event){
    const value=(data.target as HTMLInputElement).value;
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  EditarDeporte(id:number){
    this.openPopUp(id);
  }
  AgregarDeporte(){
    this.openPopUp(0);
  }
  EliminarDeporte(id:number){
     this.service.deleteDeporte(id).subscribe(res=>{
        this.MostrarDeporte();
     })
  }

  openPopUp(id?:number){
    var _popup=this.dialog.open(PopapDeporteComponent, {
      width:'60%',
      enterAnimationDuration:'1000ms',
      exitAnimationDuration:'1000ms',
      data:{
        title: 'Formulario deportes',
        id: id
      }
    });
    _popup.afterClosed().subscribe(item=>{
      this.MostrarDeporte();
    });
  }

  ngOnInit(): void {
    this.MostrarDeporte();
  }
}
