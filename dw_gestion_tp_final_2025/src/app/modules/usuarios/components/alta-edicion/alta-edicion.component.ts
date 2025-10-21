import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from '../../service/usuarios.service';
import { dtoCreateUsuario } from '../../model/usuario';

@Component({
  selector: 'app-alta-edicion',
  templateUrl: './alta-edicion.component.html',
  styleUrl: './alta-edicion.component.scss'
})
export class AltaEdicionComponent {

  form: FormGroup;

  constructor(
    private _usuariosService: UsuariosService,
    private router: Router
  ) {
    this.form = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      isActive: new FormControl(true)
    });
  }
  goBack() {
    this.router.navigate(['usuarios']);
  }

  onSubmit() {

    const { firstName, lastName, isActive } = this.form.getRawValue();

    const payload: dtoCreateUsuario = {
      firstName: firstName,
      lastName: lastName,
      isActive: isActive
    }

    this._usuariosService.saveUsuario(payload).subscribe({
      next: (res) => {
        console.log(res);
        this.goBack();
      },
      error: (error) => {
        console.error('Error al guardar usuario: ', error);
      },
      complete: () => {
        console.log('Comunicacion finalizada');
      }
    });
  }

}
