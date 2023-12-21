import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Club } from '../interfaces/club';

const httpOptions =
{
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  private api = "http://localhost:3000/api/club";

  constructor(private http:HttpClient) { }

  getClub():Observable<Club[]>{
    return this.http.get<Club[]>(this.api);
  }

  postClub(data:any){
    return this.http.post(this.api,data);
  }

  getClubById(id:number){
    return this.http.get(this.api+"/"+id);
  }

  deleteClub(id:number){
    return this.http.delete(this.api+"/"+id);
  }

  updateClub(id:number, data:any){
    return this.http.patch(this.api+"/"+id, data);
  }

}
