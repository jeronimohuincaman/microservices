import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../service/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.scss'
})
export class UsuariosComponent implements OnInit {
  columnsNames: string[] = ['ID', 'Nombre', 'Apellido'];
  columnsKey: string[] = ['id', 'firstName', 'lastName'];
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
    private _usuariosService: UsuariosService
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

}
