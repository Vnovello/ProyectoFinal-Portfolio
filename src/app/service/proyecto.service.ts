import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Proyecto } from '../model/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  URL = 'http://localhost:8080/proye/' ; 

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Proyecto[]>{
    return this.httpClient.get<Proyecto[]>(this.URL + 'lista'); 
  }

  public detail(id: number): Observable<Proyecto>{
    return this.httpClient.get<Proyecto>(this.URL + `detail/${id}`);
  }
  
  public save(proyectos:Proyecto): Observable<any>{
    return this.httpClient.post<any>(this.URL +'create', proyectos);
  }

  public update(id: number, proyectos:Proyecto): Observable<any>{
    return this.httpClient.put<any>(this.URL +`update/${id}`, proyectos);
  }
  
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}