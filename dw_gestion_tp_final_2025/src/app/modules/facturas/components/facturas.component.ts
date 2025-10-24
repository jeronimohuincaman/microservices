import { Component, OnInit } from '@angular/core';
import { FacturasService } from '../service/facturas.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../../shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.scss']
})
export class FacturasComponent implements OnInit {

  columnsNames: string[] = ['ID', 'Número', 'Cliente', 'Total','Acciones'];
  columnsKey: string[] = ['id', 'numero', 'cliente', 'total','acciones'];
  data: any[] = [
    // { id: 1, nombre: 'Artículo A', precio: 1200 },
    // { id: 2, nombre: 'Artículo B', precio: 850 }
  ];

  constructor(
    private _facturasService: FacturasService,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getFacturas();
  }

  getAccion(element: any) {
    if (element.type === 'delete') {
      this.deleteFactura(element);
    }
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

  deleteFactura(element: any) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data: { mensaje: 'Está a punto de eliminar un factura ¿Desea continuar?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        console.log('Factura eliminado:', element);
        // aquí hacés la llamada al servicio o lo que necesites

        this._facturasService.deleteFactura(element.value.id).subscribe({
          next: (res) => {
            this.getFacturas();
          },
          error: (error) => {
            console.error('Error al eliminar factura', error);
          }
        })

      }
    });
  }
}
