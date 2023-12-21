import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ranking } from '../interfaces/ranking';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  private api = "http://localhost:3000/api/ranking"

  constructor(private http:HttpClient) { }

  getRanking():Observable<Ranking[]>{
    return this.http.get<Ranking[]>(this.api);
  }

  postRanking(data:any){
    return this.http.post(this.api,data);
  }

  getRankingById(id:number){
    return this.http.get(this.api+"/"+id);
  }

  deleteRanking(id:number){
    return this.http.delete(this.api+"/"+id);
  }

  updateRanking(id:number, data:any){
    return this.http.patch(this.api+"/"+id, data);
  }
}
