import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Deportista } from '../interfaces/deportista';

@Injectable({
  providedIn: 'root'
})
export class DeportistaService {

  private api = "http://localhost:3000/api/deportista";

  constructor(private http:HttpClient) { }

  getDeportista():Observable<Deportista[]>{
    return this.http.get<Deportista[]>(this.api);
  }

  postDeportista(data:any){
    return this.http.post(this.api,data);
  }
  getDeportistabyId(id:number){
    return this.http.get(this.api+"/"+id);
  }
  deleteDeportista(id:number){
    return this.http.delete(this.api+"/"+id);
  }
  updateDeportista(id:number, data:any){
    return this.http.patch(this.api+"/"+id, data);
  }
}
