import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Catalogo } from '../interfaces/catalogo';

const httpOptions =
{
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  private api = "http://localhost:3000/api/universal";

  constructor(private http:HttpClient) { }

  getCatalogo():Observable<Catalogo[]>{
    return this.http.get<Catalogo[]>(this.api);
  }

  postCatalogo(data:any){
    return this.http.post(this.api,data);
  }

  getCatalogoById(id:number){
    return this.http.get(this.api+"/"+id);
  }

  deleteCatalogo(id:number){
    return this.http.delete(this.api+"/"+id);
  }

  updateCatalogo(id:number,data:any){
    return this.http.patch(this.api+"/"+id, data);
  }

  getListCatologoEsp(tip: any): Observable<any>{
    return this.http.get(this.api+"/tip"+tip, httpOptions);
  }
}
