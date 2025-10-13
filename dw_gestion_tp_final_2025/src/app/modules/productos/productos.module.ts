import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './components/productos.component';
import { RouterModule, Routes } from '@angular/router';
import { TablaDinamicaModule } from '../../shared/tabla-dinamica/tabla-dinamica.module';

const routes: Routes = [
  { path: '', component: ProductosComponent }
];

@NgModule({
  declarations: [
    ProductosComponent
  ],
  imports: [
    CommonModule,
    TablaDinamicaModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductosModule { }
