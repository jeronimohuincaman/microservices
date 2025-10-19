import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacturasComponent } from './components/facturas.component';
import { TablaDinamicaModule } from "../../shared/tabla-dinamica/tabla-dinamica.module";
import { RouterModule, Routes } from '@angular/router';
import { AltaEdicionComponent } from './components/alta-edicion/alta-edicion.component';
import { MaterialModule } from '../../shared/material/material.module';

const routes: Routes = [
  { path: '', component: FacturasComponent },
  { path: 'alta', component: AltaEdicionComponent }
];

@NgModule({
  declarations: [
    FacturasComponent,
    AltaEdicionComponent
  ],
  imports: [
    CommonModule,
    TablaDinamicaModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class FacturasModule { }
