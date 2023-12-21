import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DeportistaService } from 'src/app/dashboard/services/deportista.service';
import { RankingService } from 'src/app/dashboard/services/ranking.service';

@Component({
  selector: 'app-popap-ranking',
  templateUrl: './popap-ranking.component.html',
  styleUrls: ['./popap-ranking.component.css']
})
export class PopapRankingComponent implements OnInit{

  comboDeportista: any = [];
  inputdata:any;
  editdata:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private ref:MatDialogRef<PopapRankingComponent>,private builder:FormBuilder,private service:RankingService, private serviceDeportista:DeportistaService){}

  ngOnInit(): void {
    this.inputdata=this.data;
    if(this.inputdata.id>0){
      this.setPopUpdata(this.inputdata.id)
    }
  }

  rankingForm=this.builder.group({
    deportista_ranking:this.builder.control('',Validators.required),
    bloqueos:this.builder.control(''),
    ataques:this.builder.control(''),
    defensas:this.builder.control(''),
    servicios:this.builder.control(''),
    canastas:this.builder.control(''),
    goles:this.builder.control(''),
    atajadas:this.builder.control('')
  });


  closePopup(){
    this.ref.close();
  }

  saveRanking(){
    if(this.inputdata.id > 0){
      this.service.updateRanking(this.inputdata.id,this.rankingForm.value).subscribe(()=>{
        this.closePopup();
      })
    }else{
      this.service.postRanking(this.rankingForm.value).subscribe(res=>{
        this.closePopup();
        })
    }

  }

  setPopUpdata(id:number){
    this.service.getRankingById(id).subscribe(item=>{
       this.editdata=item;
       this.rankingForm.patchValue({deportista_ranking:this.editdata[0].deportista_ranking,
       bloqueos:this.editdata[0].bloqueos,ataques:this.editdata[0].ataques,
       defensas:this.editdata[0].defensas,servicios:this.editdata[0].servicios,canastas:this.editdata[0].canastas,goles:this.editdata[0].goles,
       atajadas:this.editdata[0].atajadas
      })
    })
  }

  listComboDeportista(){
    this.serviceDeportista.getDeportista().subscribe((data:{})=>{
      this.comboDeportista = data;
     })
  }






}
