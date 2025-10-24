import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './components/usuarios.component';
import { RouterModule, Routes } from '@angular/router';
import { TablaDinamicaModule } from '../../shared/tabla-dinamica/tabla-dinamica.module';
import { AltaEdicionComponent } from './components/alta-edicion/alta-edicion.component';
import { MaterialModule } from '../../shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogModule } from '../../shared/confirm-dialog/confirm-dialog.module';

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
    MaterialModule,
    ReactiveFormsModule,
    ConfirmDialogModule,
    RouterModule.forChild(routes)
  ]
})
export class UsuariosModule { }
