import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaDinamicaComponent } from './tabla-dinamica.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [TablaDinamicaComponent],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [TablaDinamicaComponent]
})
export class TablaDinamicaModule { }
