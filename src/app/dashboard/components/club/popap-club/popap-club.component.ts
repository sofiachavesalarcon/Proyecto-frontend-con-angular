import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CatalogoService } from 'src/app/dashboard/services/catalogo.service';
import { ClubService } from 'src/app/dashboard/services/club.service';


@Component({
  selector: 'app-popap-club',
  templateUrl: './popap-club.component.html',
  styleUrls: ['./popap-club.component.css']
})
export class PopapClubComponent implements OnInit{
  comboCiudad: any =[];


  inputdata:any;
  editdata:any;

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private ref:MatDialogRef<PopapClubComponent>,private builder:FormBuilder,private service:ClubService, private serviceCatalogo: CatalogoService){}

  ngOnInit(): void {
    this.inputdata=this.data;
    if(this.inputdata.id>0){
      this.setPopUpdata(this.inputdata.id)
    }
  }

  clubForm=this.builder.group({
    nombre_club:this.builder.control('',Validators.required),
    tecnico_club:this.builder.control('',Validators.required),
    ciudad:this.builder.control('',Validators.required),
  });

  closePopup(){
    this.ref.close();
  }

  saveClub(){
    if(this.inputdata.id > 0){
      this.service.updateClub(this.inputdata.id,this.clubForm.value).subscribe(()=>{
        this.closePopup();
      })
    }else{
      this.service.postClub(this.clubForm.value).subscribe(res=>{
        this.closePopup();
        })
    }

  }

  setPopUpdata(id:number){
    this.service.getClubById(id).subscribe(item=>{
       this.editdata=item;
       this.clubForm.patchValue({nombre_club:this.editdata[0].nombre_club,
       tecnico_club:this.editdata[0].tecnico_club,ciudad:this.editdata[0].ciudad
      })
    })
  }

  listComboCiudad(){
    this.serviceCatalogo.getListCatologoEsp('/' + 6).subscribe((data:{})=>{
     this.comboCiudad = data;
    })
  }
}
