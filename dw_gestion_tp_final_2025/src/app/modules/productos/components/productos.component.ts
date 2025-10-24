import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../service/productos.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../../shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.scss'
})
export class ProductosComponent implements OnInit {
  columnsNames: string[] = ['ID', 'Descripción', 'Precio','Acciones'];
  columnsKey: string[] = ['id', 'name', 'price','acciones'];
  data: any[] = [
    // { id: 1, nombre: 'Artículo A', precio: 1200 },
    // { id: 2, nombre: 'Artículo B', precio: 850 }
  ];

  constructor(
    private _productosService: ProductosService,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getProductos();
  }

  getAccion(element: any) {
    if (element.type === 'delete') {
      this.deleteProducto(element);
    }
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

  deleteProducto(element: any) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data: { mensaje: 'Está a punto de eliminar un producto ¿Desea continuar?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        console.log('Producto eliminado:', element);
        // aquí hacés la llamada al servicio o lo que necesites

        this._productosService.deleteProducto(element.value.id).subscribe({
          next: (res) => {
            this.getProductos();
          },
          error: (error) => {
            console.error('Error al eliminar producto', error);
          }
        })

      }
    });
  }
}
