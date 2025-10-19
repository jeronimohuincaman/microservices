import { Component, OnInit } from '@angular/core';
import { FacturasService } from '../service/facturas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.scss']
})
export class FacturasComponent implements OnInit {

  columnsNames: string[] = ['ID', 'Numero', 'Cliente', 'Total'];
  columnsKey: string[] = ['id', 'numero', 'cliente', 'total'];
  data: any[] = [
    // { id: 1, nombre: 'Artículo A', precio: 1200 },
    // { id: 2, nombre: 'Artículo B', precio: 850 }
  ];

  constructor(
    private _facturasService: FacturasService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getFacturas();
  }


  getFacturas() {
    this._facturasService.getFacturas().subscribe({
      next: (facturas) => {
        console.log('facturas:', facturas);
        this.data = facturas;
      },
      error: (err) => {
        console.error('Error al obtener facturas', err);
      }
    });
  }

  saveFactura() {
    this.router.navigate(['facturas/alta']);
  }
}
