import { Component } from '@angular/core';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.scss']
})
export class FacturasComponent {

  columnsNames: string[] = ['ID', 'Nombre', 'Precio'];
  columnsKey: string[] = ['id', 'nombre', 'precio'];
  data: any[] = [
    { id: 1, nombre: 'Artículo A', precio: 1200 },
    { id: 2, nombre: 'Artículo B', precio: 850 }
  ];

}
