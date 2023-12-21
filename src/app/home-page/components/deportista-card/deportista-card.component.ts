import { Component, OnInit } from '@angular/core';
import { Deportista } from 'src/app/dashboard/interfaces/deportista';
import { DeportistaService } from 'src/app/dashboard/services/deportista.service';

@Component({
  selector: 'app-deportista-card',
  templateUrl: './deportista-card.component.html',
  styleUrls: ['./deportista-card.component.css']
})
export class DeportistaCardComponent  implements OnInit{

  deportistaList !: Deportista[];
  dataSource: any;

  constructor(private service:DeportistaService){}

  MostrarDeportista(){
    this.service.getDeportista().subscribe(res=>{
       this.deportistaList= res;
    });
  }
  ngOnInit(): void {
      this.MostrarDeportista();
  }

}
