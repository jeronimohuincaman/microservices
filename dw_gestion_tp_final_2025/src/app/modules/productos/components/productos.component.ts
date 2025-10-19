import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../service/productos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.scss'
})
export class ProductosComponent implements OnInit {
  columnsNames: string[] = ['ID', 'Descripción', 'Precio'];
  columnsKey: string[] = ['id', 'name', 'price'];
  data: any[] = [
    // { id: 1, nombre: 'Artículo A', precio: 1200 },
    // { id: 2, nombre: 'Artículo B', precio: 850 }
  ];

  constructor(
    private _productosService: ProductosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getProductos();
  }


  getProductos() {
    this._productosService.getProductos().subscribe({
      next: (productos) => {
        console.log('productos:', productos);
        this.data = productos;
      },
      error: (err) => {
        console.error('Error al obtener productos', err);
      }
    });
  }

  saveProducto() {
    this.router.navigate(['productos/alta']);
  }
}
