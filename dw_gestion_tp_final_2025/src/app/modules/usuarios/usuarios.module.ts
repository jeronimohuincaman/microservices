import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './components/usuarios.component';
import { RouterModule, Routes } from '@angular/router';
import { TablaDinamicaModule } from '../../shared/tabla-dinamica/tabla-dinamica.module';

const routes: Routes = [
  { path: '', component: UsuariosComponent }
];


@NgModule({
  declarations: [
    UsuariosComponent
  ],
  imports: [
    CommonModule,
    TablaDinamicaModule,
    RouterModule.forChild(routes)
  ]
})
export class UsuariosModule { }
