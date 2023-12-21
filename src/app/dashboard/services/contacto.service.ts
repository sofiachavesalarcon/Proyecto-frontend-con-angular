import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contacto } from '../interfaces/contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  private api = "http://localhost:3000/api/contacto";

  constructor(private http:HttpClient) { }

  getContacto():Observable<Contacto[]>{
    return this.http.get<Contacto[]>(this.api);
  }

  postContacto(data:any){
    return this.http.post(this.api,data);
  }
  getContactoById(id:number){
    return this.http.get(this.api+"/"+id);
  }
  deleteContacto(id:number){
    return this.http.delete(this.api+"/"+id);
  }
  updateContacto(id:number, data:any){
    return this.http.patch(this.api+"/"+id, data);
  }
}
