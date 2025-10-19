import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './components/usuarios.component';
import { RouterModule, Routes } from '@angular/router';
import { TablaDinamicaModule } from '../../shared/tabla-dinamica/tabla-dinamica.module';
import { AltaEdicionComponent } from './components/alta-edicion/alta-edicion.component';

const routes: Routes = [
  { path: '', component: UsuariosComponent },
  { path: 'alta', component: AltaEdicionComponent }
];


@NgModule({
  declarations: [
    UsuariosComponent,
    AltaEdicionComponent
  ],
  imports: [
    CommonModule,
    TablaDinamicaModule,
    RouterModule.forChild(routes)
  ]
})
export class UsuariosModule { }
