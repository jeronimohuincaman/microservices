import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { dtoCreateFactura } from '../model/factura';

@Injectable({
  providedIn: 'root'
})
export class FacturasService {

  constructor(
    private http: HttpClient
  ) { }

  getFacturas() {
    return this.http.get<any>(`${environment.facturas}`);
  }

  saveFactura(payload: dtoCreateFactura) {
    return this.http.post<any>(`${environment.facturas}`, payload);
  }

  deleteFactura(id: number) {
    return this.http.delete<any>(`${environment.facturas}/${id}`)
  }
}
