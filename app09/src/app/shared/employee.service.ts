import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Employee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  apiUrl:string;

  constructor(private httpClient:HttpClient) {
    this.apiUrl=environment.empApiUrl;
  }

  getAllByDeptId(deptId:number):Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(this.apiUrl +"?deptId="+deptId);
  }

  getById(id:number):Observable<Employee>{
    return this.httpClient.get<Employee>(this.apiUrl + "/" + id);
  }

  add(emp:Employee):Observable<Employee>{
    return this.httpClient.post<Employee>(this.apiUrl,emp);
  }

  update(emp:Employee):Observable<Employee>{
    return this.httpClient.put<Employee>(this.apiUrl + "/" + emp.id,emp);
  }

  deleteById(id:number):Observable<void>{
    return this.httpClient.delete<void>(this.apiUrl + "/" + id);
  }
}
