import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Deporte } from '../interfaces/deporte';

@Injectable({
  providedIn: 'root'
})
export class DeporteService {

  private api = "http://localhost:3000/api/deporte";
  constructor(private http:HttpClient) {}

  getDeporte():Observable<Deporte[]>{
    return this.http.get<Deporte[]>(this.api);
  }

  postDeporte(data:any){
    return this.http.post(this.api,data);
  }

  getDeporteById(id:number){
    return this.http.get(this.api+"/"+id);
  }

  deleteDeporte(id:number){
    return this.http.delete(this.api+"/"+id);
  }

  updateDeporte(id:number, data:any){
    return this.http.patch(this.api+"/"+id, data);
  }


}
