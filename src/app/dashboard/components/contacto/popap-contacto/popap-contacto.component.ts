import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CatalogoService } from 'src/app/dashboard/services/catalogo.service';
import { ContactoService } from 'src/app/dashboard/services/contacto.service';
import { DeportistaService } from 'src/app/dashboard/services/deportista.service';

@Component({
  selector: 'app-popap-contacto',
  templateUrl: './popap-contacto.component.html',
  styleUrls: ['./popap-contacto.component.css']
})
export class PopapContactoComponent implements OnInit{
  inputdata:any;
  editdata:any;

  comboTipContacto: any = [];
  comboDeportista: any = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private ref:MatDialogRef<PopapContactoComponent>,private builder:FormBuilder,private service:ContactoService, private serviceCatalogo:CatalogoService, private serviceDeportista:DeportistaService){}

  ngOnInit(): void {
    this.inputdata=this.data;
    if(this.inputdata.id>0){
      this.setPopUpdata(this.inputdata.id)
    }
  }

  contactoForm=this.builder.group({
    deportista_contacto:this.builder.control('',Validators.required),
    tipo_contacto:this.builder.control('',Validators.required),
    contacto:this.builder.control('',Validators.required),
  });


  closePopup(){
    this.ref.close();
  }

  saveContacto(){
    if(this.inputdata.id > 0){
      this.service.updateContacto(this.inputdata.id,this.contactoForm.value).subscribe(()=>{
        this.closePopup();
      })
    }else{
      this.service.postContacto(this.contactoForm.value).subscribe(res=>{
        this.closePopup();
        })
    }

  }


  setPopUpdata(id:number){
    this.service.getContactoById(id).subscribe(item=>{
       this.editdata=item;
       this.contactoForm.patchValue({deportista_contacto:this.editdata[0].deportista_contacto,
       tipo_contacto:this.editdata[0].tipo_contacto,contacto:this.editdata[0].contacto
      })
    })
  }

  ListarComboTipContacto(){
    this.serviceCatalogo.getListCatologoEsp('/' + 2).subscribe((data: {}) => {
      this.comboTipContacto = data;
    })
  }

  ListarComboDeportista(){
    this.serviceDeportista.getDeportista().subscribe((data: {}) => {
      this.comboDeportista = data;
    })
  }
}
