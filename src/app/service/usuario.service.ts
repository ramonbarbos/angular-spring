import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConstants } from '../app-constants';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  getStudentList(): Observable<any>{
    return this.http.get<any>(AppConstants.baseUrl);
  }

  deletarUsuario(id: Number) : Observable<any>{
    return this.http.delete<any>(AppConstants.baseUrl + id, {responseType : 'text' as 'json'});
  }

  consultarUser(nome: String) : Observable<any>{
    return this.http.get<any>(AppConstants.baseUrl + "usuarioPorNome/" + nome);
  }

}
