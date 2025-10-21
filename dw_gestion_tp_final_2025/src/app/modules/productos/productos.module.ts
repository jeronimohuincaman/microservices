import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './components/productos.component';
import { RouterModule, Routes } from '@angular/router';
import { TablaDinamicaModule } from '../../shared/tabla-dinamica/tabla-dinamica.module';
import { AltaEdicionComponent } from './components/alta-edicion/alta-edicion.component';
import { MaterialModule } from '../../shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ProductosComponent },
  { path: 'alta', component: AltaEdicionComponent }
];

@NgModule({
  declarations: [
    ProductosComponent,
    AltaEdicionComponent
  ],
  imports: [
    CommonModule,
    TablaDinamicaModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductosModule { }
