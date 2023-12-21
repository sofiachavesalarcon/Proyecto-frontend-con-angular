import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CatalogoService } from 'src/app/dashboard/services/catalogo.service';

@Component({
  selector: 'app-popap-catalogo',
  templateUrl: './popap-catalogo.component.html',
  styleUrls: ['./popap-catalogo.component.css']
})
export class PopapCatalogoComponent implements OnInit{

  inputdata:any;
  editdata:any;
  CataUniCatalogo: any = [];
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private ref:MatDialogRef<PopapCatalogoComponent>,private builder:FormBuilder,private service:CatalogoService){}

  ngOnInit(): void {
    this.inputdata=this.data;
    if(this.inputdata.id>0){
      this.setPopUpdata(this.inputdata.id)
    }
  }
  catalogoForm=this.builder.group({
    tipo_catalogo:this.builder.control('',Validators.required),
    denominacion:this.builder.control('',Validators.required),
  });


  closePopup(){
    this.ref.close();
  }

  saveCatalogo(){
    if(this.inputdata.id > 0){
      var datosvalor1 = this.catalogoForm.getRawValue()['denominacion'];
      var datosvalor2 = this.catalogoForm.getRawValue()['tipo_catalogo'];
      var cadena = {"denominacion":datosvalor1, "tipo_catalogo":datosvalor2};
      this.service.updateCatalogo(this.inputdata.id,cadena).subscribe(()=>{
        this.closePopup();
      })
    }else{
      var datosvalo1 = this.catalogoForm.getRawValue()['denominacion'];
      var datosvalo2 = this.catalogoForm.getRawValue()['tipo_catalogo'];
      var cadena = {"denominacion":datosvalo1, "tipo_catalogo":datosvalo2};
      this.service.postCatalogo(cadena).subscribe(res=>{
        this.closePopup();
        })
    }

  }

  setPopUpdata(id:number){
    this.service.getCatalogoById(id).subscribe(item=>{
       this.editdata=item;
       this.catalogoForm.patchValue({tipo_catalogo:this.editdata[0].tipo_catalogo,
       denominacion:this.editdata[0].denominacion
      })
    })
  }

  ListarCatalogoE(){
    this.service.getListCatologoEsp('/' + 1).subscribe((data: {}) => {
      this.CataUniCatalogo = data;
    })
  }
}
