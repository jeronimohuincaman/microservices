import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { dtoCreateUsuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
    private http: HttpClient
  ) { }

  getUsuarios() {
    return this.http.get<any>(`${environment.usuarios}`);
  }

  saveUsuario(payload: dtoCreateUsuario) {
    return this.http.post<any>(`${environment.usuarios}`, payload);
  }

  deleteUsuario(id: number) {
    return this.http.delete<any>(`${environment.usuarios}/${id}`)
  }
}
