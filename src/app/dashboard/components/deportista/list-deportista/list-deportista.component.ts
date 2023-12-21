import { Component, OnInit,ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Deportista } from 'src/app/dashboard/interfaces/deportista';
import { DeportistaService } from 'src/app/dashboard/services/deportista.service';
import { PopapComponent } from '../popap/popap.component';

@Component({
  selector: 'dashboard-list-deportista',
  templateUrl: './list-deportista.component.html',
  styleUrls: ['./list-deportista.component.css']
})
export class ListDeportistaComponent implements OnInit{

  deportistaList !: Deportista[];
  dataSource: any;
  displayedColumns: string[]= ["Nombres","Apellidos","Fecha-Nacimiento","Peso","Altura","Lateralidad","Sexo","Club","Deporte","Posicion","Accion"];
  @ViewChild(MatPaginator) paginator !: MatPaginator;


  constructor(private service:DeportistaService, private dialog:MatDialog){}


  MostrarDeportista(){
    this.service.getDeportista().subscribe(res=>{
       this.deportistaList= res;
       this.dataSource = new MatTableDataSource<Deportista>(this.deportistaList);
       this.dataSource.paginator = this.paginator;
    });
  }

  filterChange(data:Event){
    const value=(data.target as HTMLInputElement).value;
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  EditarDeportista(id:number){
    this.openPopUp(id);
  }
  AgregarDeportista(){
    this.openPopUp(0);
  }
  EliminarDeportista(id:number){
     this.service.deleteDeportista(id).subscribe(res=>{
        this.MostrarDeportista();
     })
  }

  openPopUp(id?:number){
    var _popup=this.dialog.open(PopapComponent, {
      width:'60%',
      enterAnimationDuration:'1000ms',
      exitAnimationDuration:'1000ms',
      data:{
        title: 'Formulario deportistas',
        id: id,
      }
    });
    _popup.afterClosed().subscribe(item=>{
      this.MostrarDeportista();
    });
  }

  ngOnInit(): void {
    this.MostrarDeportista();
  }
}
