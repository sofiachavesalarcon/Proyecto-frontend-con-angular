import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Catalogo } from 'src/app/dashboard/interfaces/catalogo';
import { CatalogoService } from 'src/app/dashboard/services/catalogo.service';
import { PopapCatalogoComponent } from '../popap-catalogo/popap-catalogo.component';

@Component({
  selector: 'dashboard-list-catalogo',
  templateUrl: './list-catalogo.component.html',
  styleUrls: ['./list-catalogo.component.css']
})
export class ListCatalogoComponent implements OnInit{
  catalogoList !: Catalogo[];
  dataSource: any;
  displayedColumns: string[]= ["Id","Tipo Catalogo","Denominacion","Accion"];

  @ViewChild(MatPaginator) paginator !: MatPaginator;

  constructor(private service:CatalogoService, private dialog:MatDialog){}

  MostrarCatalogo(){
    this.service.getCatalogo().subscribe(res=>{
       this.catalogoList= res;
       this.dataSource = new MatTableDataSource<Catalogo>(this.catalogoList);
       this.dataSource.paginator = this.paginator;
    });
  }

  filterChange(data:Event){
    const value=(data.target as HTMLInputElement).value;
    this.dataSource.filter = value.trim();
  }

  EditarCatalogo(id:number){
    this.openPopUp(id);
  }
  AgregarCatalogo(){
    this.openPopUp(0);
  }
  EliminarCatalogo(id:number){
     this.service.deleteCatalogo(id).subscribe(res=>{
        this.MostrarCatalogo();
     })
  }

  openPopUp(id:number){
    var _popup=this.dialog.open(PopapCatalogoComponent, {
      width:'60%',
      enterAnimationDuration:'1000ms',
      exitAnimationDuration:'1000ms',
      data:{
        title: 'Formulario catalogo',
        id: id,
      }
    });
    _popup.afterClosed().subscribe(item=>{
      this.MostrarCatalogo();
    });
  }

  ngOnInit(): void {
    this.MostrarCatalogo();
  }
}
