import { Component, Inject,OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CatalogoService } from 'src/app/dashboard/services/catalogo.service';
import { ClubService } from 'src/app/dashboard/services/club.service';
import { DeporteService } from 'src/app/dashboard/services/deporte.service';

@Component({
  selector: 'app-popap-deporte',
  templateUrl: './popap-deporte.component.html',
  styleUrls: ['./popap-deporte.component.css']
})
export class PopapDeporteComponent implements OnInit {

  inputdata:any;
  editdata:any;
  comboCategoria: any =[];
  comboClubes: any = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private ref:MatDialogRef<PopapDeporteComponent>,private builder:FormBuilder,private service:DeporteService, private serviceCatalogo:CatalogoService, private serviceClub:ClubService){}

  ngOnInit(): void {
    this.inputdata=this.data;
    if(this.inputdata.id>0){
      this.setPopUpdata(this.inputdata.id)
    }
  }
  deporteForm=this.builder.group({
    nombre_deporte:this.builder.control('',Validators.required),
    categoria_deporte:this.builder.control('',Validators.required),
    popularidad:this.builder.control('',Validators.required),
    club:this.builder.control('',Validators.required),
  });

  closePopup(){
    this.ref.close();
  }

  saveDeporte(){
    if(this.inputdata.id > 0){
      this.service.updateDeporte(this.inputdata.id,this.deporteForm.value).subscribe(()=>{
        this.closePopup();
      })
    }else{
      this.service.postDeporte(this.deporteForm.value).subscribe(res=>{
        this.closePopup();
        })
    }
  }

  setPopUpdata(id:number){
    this.service.getDeporteById(id).subscribe(item=>{
       this.editdata=item;
       this.deporteForm.patchValue({nombre_deporte:this.editdata[0].nombre_deporte,
       categoria_deporte:this.editdata[0].categoria_deporte,popularidad:this.editdata[0].popularidad,
       club:this.editdata[0].club
      })
    })
  }

  listComboCategoria(){
     this.serviceCatalogo.getListCatologoEsp('/' + 7).subscribe((data:{})=>{
      this.comboCategoria = data;
     })
  }

  listComboClubes(){
    this.serviceClub.getClub().subscribe((data:{})=>{
      this.comboClubes = data;
     })
  }

}
