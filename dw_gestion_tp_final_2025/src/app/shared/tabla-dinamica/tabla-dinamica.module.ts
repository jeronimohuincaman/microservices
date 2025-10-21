import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaDinamicaComponent } from './tabla-dinamica.component';
import { MatTableModule } from '@angular/material/table';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [TablaDinamicaComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MaterialModule
  ],
  exports: [TablaDinamicaComponent]
})
export class TablaDinamicaModule { }
