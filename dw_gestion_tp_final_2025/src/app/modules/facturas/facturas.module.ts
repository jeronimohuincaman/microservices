import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacturasComponent } from './components/facturas.component';
import { TablaDinamicaModule } from "../../shared/tabla-dinamica/tabla-dinamica.module";
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: FacturasComponent }
];

@NgModule({
  declarations: [
    FacturasComponent
  ],
  imports: [
    CommonModule,
    TablaDinamicaModule,
    RouterModule.forChild(routes)
  ]
})
export class FacturasModule { }
