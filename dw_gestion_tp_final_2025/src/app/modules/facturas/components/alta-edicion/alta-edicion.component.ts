import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FacturasService } from '../../service/facturas.service';
import { dtoCreateFactura, IItemFactura } from '../../model/factura';

@Component({
  selector: 'app-alta-edicion',
  templateUrl: './alta-edicion.component.html',
  styleUrl: './alta-edicion.component.scss'
})
export class AltaEdicionComponent {

  form: FormGroup;
  items_factura: IItemFactura[] = [];
  total: number = 0;

  constructor(
    private _facturasService: FacturasService,
    private router: Router
  ) {
    this.form = new FormGroup({
      numero: new FormControl(),
      cliente: new FormControl(),
      total: new FormControl(),
      descripcion: new FormControl(),
      cantidad: new FormControl(),
      precio: new FormControl()
    });
  }

  get isAddItemInvalid() {
    const { descripcion, cantidad, precio } = this.form.getRawValue();
    return !descripcion || !cantidad || !precio;
  }


  goBack() {
    this.router.navigate(['facturas']);
  }

  addItem($event?:any) {

    if($event) {
      $event.preventDefault();
    }

    const { descripcion, cantidad, precio } = this.form.getRawValue();

    let item = {
      descripcion,
      cantidad,
      precio
    }

    this.items_factura = [item, ...this.items_factura];

    this.form.reset('descripcion');
    this.form.reset('cantidad');
    this.form.reset('precio');

    this.calclularTotal();
  }

  removeItem(item: IItemFactura) {
    let index = this.items_factura.findIndex(i => i === item);
    this.items_factura = this.items_factura.filter((item, i) => i !== index);
    this.calclularTotal();
  }

  onSubmit() {

    const { numero, cliente, total } = this.form.getRawValue();

    const payload: dtoCreateFactura = {
      numero: numero,
      cliente: cliente,
      total: total,
      items: this.items_factura
    }

    this._facturasService.saveFactura(payload).subscribe({
      next: (res) => {
        console.log(res);
        this.goBack();
      },
      error: (error) => {
        console.error('Error al guardar factura: ', error);
      },
      complete: () => {
        console.log('Comunicacion finalizada');
      }
    });
  }

  calclularTotal(): void {
    this.total = this.items_factura.reduce((acc, item) => acc + (Number(item.precio) * Number(item.cantidad)), 0)
    this.form.get('total')?.setValue(this.total);
  }

  /**
   *
   * @param $event
   * @param cambio_de_foco
   * @param redirect_control
   */
  seleccionItem($event: any, cambio_de_foco?: boolean, redirect_control?: string) {
    // Si es un evento de teclado, evita que se propague
    if ($event instanceof KeyboardEvent) $event.preventDefault();

    const input = $event.target as HTMLInputElement;
    if (input?.tagName === 'INPUT') input?.select();

    // Muevo el foco al campo "cantidad" luego de un pequeño retraso.
    // Lo encapsulo dentro de `setTimeout` porque espero a que el DOM renderice el input "cantidad".
    setTimeout(() => {
      const field = document.querySelector(`[formControlName=${redirect_control}]`) as HTMLInputElement;
      field?.focus();
      if (field.tagName === 'INPUT') field?.select();
    }, 1);
  }
}
