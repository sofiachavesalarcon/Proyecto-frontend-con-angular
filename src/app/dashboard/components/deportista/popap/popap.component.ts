import { FormBuilder, Validators } from '@angular/forms';
import { Component, Inject,OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DeportistaService } from 'src/app/dashboard/services/deportista.service';
import { CatalogoService } from 'src/app/dashboard/services/catalogo.service';
import { ClubService } from 'src/app/dashboard/services/club.service';
import { DeporteService } from 'src/app/dashboard/services/deporte.service';


@Component({
  selector: 'app-popap',
  templateUrl: './popap.component.html',
  styleUrls: ['./popap.component.css']
})
export class PopapComponent implements OnInit{

  inputdata:any;
  editdata:any;
  comboLateralidad: any = [];
  comboSexo: any =[];
  comboClub: any = [];
  comboDeporte: any =[];
  comboPosicion: any =[];

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private ref:MatDialogRef<PopapComponent>,private builder:FormBuilder,private service:DeportistaService, private serviceCatalogo:CatalogoService, private serviceClub:ClubService, private serviceDeporte:DeporteService){}

   ngOnInit(): void {
    this.inputdata=this.data;
    if(this.inputdata.id>0){
      this.setPopUpdata(this.inputdata.id)
    }
  }

  deportistaForm=this.builder.group({
    primer_nombre:this.builder.control('',Validators.required),
    segundo_nombre:this.builder.control(''),
    primer_apellido:this.builder.control('',Validators.required),
    segundo_apellido:this.builder.control(''),
    imagen:this.builder.control(''),
    fecha_nacimiento:this.builder.control(''),
    peso:this.builder.control(''),
    altura:this.builder.control(''),
    lateralidad:this.builder.control(''),
    sexo:this.builder.control(''),
    club:this.builder.control(''),
    deporte:this.builder.control(''),
    posicion:this.builder.control('')
  });

  closePopup(){
    this.ref.close();
  }

  saveDeportista(){
    if(this.inputdata.id > 0){
      this.service.updateDeportista(this.inputdata.id,this.deportistaForm.value).subscribe(()=>{
        this.closePopup();
      })
    }else{
      this.service.postDeportista(this.deportistaForm.value).subscribe(res=>{
        this.closePopup();
        })
    }

  }

  setPopUpdata(id:number){
    this.service.getDeportistabyId(id).subscribe(item=>{
       this.editdata=item;
       this.deportistaForm.patchValue({primer_nombre:this.editdata[0].primer_nombre,
       segundo_nombre:this.editdata[0].segundo_nombre,primer_apellido:this.editdata[0].primer_apellido,
       segundo_apellido:this.editdata[0].segundo_apellido,imagen:this.editdata[0].imagen,fecha_nacimiento:this.editdata[0].fecha_nacimiento,peso:this.editdata[0].peso,
       altura:this.editdata[0].altura,lateralidad:this.editdata[0].lateralidad,sexo:this.editdata[0].sexo,club:this.editdata[0].club,deporte:this.editdata[0].deporte,posicion:this.editdata[0].posicion
      })
    })
  }

  listComboLateralidad(){
    this.serviceCatalogo.getListCatologoEsp('/' + 4).subscribe((data:{})=>{
     this.comboLateralidad = data;
    })
  }

  listComboSexo(){
    this.serviceCatalogo.getListCatologoEsp('/' + 5).subscribe((data:{})=>{
     this.comboSexo = data;
    })
  }

  listComboPosicion(){
    this.serviceCatalogo.getListCatologoEsp('/' + 3).subscribe((data:{})=>{
     this.comboPosicion = data;
    })
  }

  listComboClub(){
    this.serviceClub.getClub().subscribe((data:{})=>{
      this.comboClub = data;
     })
  }

  listComboDeporte(){
    this.serviceDeporte.getDeporte().subscribe((data:{})=>{
      this.comboDeporte = data;
     })
  }

}
