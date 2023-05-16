import { Injectable } from '@angular/core';
import { Dept } from './dept';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeptService {
 
  apiUrl:string;

  constructor(private httpClient:HttpClient) {
    this.apiUrl=environment.deptApiUrl;
  }

  getAll():Observable<Dept[]>{
    return this.httpClient.get<Dept[]>(this.apiUrl);
  }

  getById(id:number):Observable<Dept>{
    return this.httpClient.get<Dept>(this.apiUrl + "/" + id);
  }

  add(dept:Dept):Observable<Dept>{
    return this.httpClient.post<Dept>(this.apiUrl,dept);
  }

  update(dept:Dept):Observable<Dept>{
    return this.httpClient.put<Dept>(this.apiUrl + "/" + dept.id,dept);
  }

  deleteById(id:number):Observable<void>{
    return this.httpClient.delete<void>(this.apiUrl + "/" + id);
  }
}
