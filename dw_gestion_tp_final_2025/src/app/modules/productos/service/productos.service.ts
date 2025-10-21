import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { dtoCreateProducto } from '../model/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(
    private http: HttpClient
  ) { }

  getProductos() {
    return this.http.get<any>(`${environment.productos}`);
  }

  saveProducto(payload: dtoCreateProducto) {
    return this.http.post<any>(`${environment.productos}`, payload);
  }

  deleteProducto(id: number) {
    return this.http.delete<any>(`${environment.productos}/${id}`)
  }
}
