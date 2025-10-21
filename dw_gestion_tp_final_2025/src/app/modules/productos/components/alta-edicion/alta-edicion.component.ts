import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductosService } from '../../service/productos.service';
import { dtoCreateProducto } from '../../model/producto';

@Component({
  selector: 'app-alta-edicion',
  templateUrl: './alta-edicion.component.html',
  styleUrl: './alta-edicion.component.scss'
})
export class AltaEdicionComponent {

  form: FormGroup;

  constructor(
    private _productosService: ProductosService,
    private router: Router
  ) {
    this.form = new FormGroup({
      name: new FormControl(''),
      price: new FormControl(0),
      active: new FormControl(true)
    });
  }

  goBack() {
    this.router.navigate(['productos']);
  }

  onSubmit() {

    const { name, price, active } = this.form.getRawValue();

    const payload: dtoCreateProducto = {
      name: name,
      price: price,
      active: active
    }

    this._productosService.saveProducto(payload).subscribe({
      next: (res) => {
        console.log(res);
        this.goBack();
      },
      error: (error) => {
        console.error('Error al guardar producto: ', error);
      },
      complete: () => {
        console.log('Comunicacion finalizada');
      }
    });


  }
}
