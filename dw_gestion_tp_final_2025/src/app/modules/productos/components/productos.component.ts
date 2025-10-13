import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.scss'
})
export class ProductosComponent {
  columnsNames: string[] = ['ID', 'Nombre', 'Precio'];
  columnsKey: string[] = ['id', 'nombre', 'precio'];
  data: any[] = [
    { id: 1, nombre: 'Artículo A', precio: 1200 },
    { id: 2, nombre: 'Artículo B', precio: 850 }
  ];
}
