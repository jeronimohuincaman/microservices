import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../service/usuarios.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../../shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.scss'
})
export class UsuariosComponent implements OnInit {
  columnsNames: string[] = ['ID', 'Nombre', 'Apellido', 'Acciones'];
  columnsKey: string[] = ['id', 'firstName', 'lastName', 'acciones'];
  data: any[] = [
    // {
    //   "id": 1,
    //   "firstName": "Jeronimo Ezequiel",
    //   "lastName": "Huincaman",
    //   "isActive": true,
    //   "createdAt": "2025-10-14T23:46:48.783Z",
    //   "updatedAt": "2025-10-14T23:46:48.783Z",
    //   "deletedAt": null
    // }
  ];

  constructor(
    private _usuariosService: UsuariosService,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getUsuarios();
  }


  getUsuarios() {
    this._usuariosService.getUsuarios().subscribe({
      next: (usuarios) => {
        console.log('Usuarios:', usuarios);
        this.data = usuarios?.data;
      },
      error: (err) => {
        console.error('Error al obtener usuarios', err);
      }
    });
  }

  getAccion(element: any) {
    console.log(element)
    if (element.type === 'delete') {
      this.deleteUsuario(element);
    }
  }

  saveUsuario() {
    this.router.navigate(['usuarios/alta']);
  }

  deleteUsuario(element: any) {
    console.log(element)
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data: { mensaje: 'Está a punto de eliminar un usuario ¿Desea continuar?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      if (result === true) {
        console.log('Usuario eliminado:', element);
        // aquí hacés la llamada al servicio o lo que necesites

        this._usuariosService.deleteUsuario(element.value.id).subscribe({
          next: (res) => {
            this.getUsuarios();
          },
          error: (error) => {
            console.error('Error al eliminar usuario', error);
          }
        })

      }
    });
  }
}
