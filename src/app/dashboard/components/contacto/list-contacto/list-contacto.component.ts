import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Catalogo } from 'src/app/dashboard/interfaces/catalogo';
import { Contacto } from 'src/app/dashboard/interfaces/contacto';
import { ContactoService } from 'src/app/dashboard/services/contacto.service';
import { PopapContactoComponent } from '../popap-contacto/popap-contacto.component';

@Component({
  selector: 'dashboard-list-contacto',
  templateUrl: './list-contacto.component.html',
  styleUrls: ['./list-contacto.component.css']
})
export class ListContactoComponent implements OnInit{
   contactoList !: Contacto[];
   dataSource: any;
   displayedColumns: string[]= ["Id Deportista","Tipo Contacto","Contacto","Accion"];

   @ViewChild(MatPaginator) paginator !: MatPaginator;

   constructor(private service:ContactoService, private dialog:MatDialog){}

   MostrarContacto(){
    this.service.getContacto().subscribe(res=>{
       this.contactoList= res;
       this.dataSource = new MatTableDataSource<Contacto>(this.contactoList);
       this.dataSource.paginator = this.paginator;
    });
  }

  filterChange(data:Event){
    const value=(data.target as HTMLInputElement).value;
    this.dataSource.filter = value.trim();
  }

  EditarContacto(id:number){
    this.openPopUp(id);
  }
  AgregarContacto(){
    this.openPopUp(0);
  }
  EliminarContacto(id:number){
     this.service.deleteContacto(id).subscribe(res=>{
        this.MostrarContacto();
     })
  }

  openPopUp(id:number){
    var _popup=this.dialog.open(PopapContactoComponent, {
      width:'60%',
      enterAnimationDuration:'1000ms',
      exitAnimationDuration:'1000ms',
      data:{
        title: 'Formulario contactos',
        id: id,
      }
    });
    _popup.afterClosed().subscribe(item=>{
      this.MostrarContacto();
    });
  }

  ngOnInit(): void {
    this.MostrarContacto();
  }
}
