import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../../material/material.module';
import { SobreNosotrosComponent } from './sobre-nosotros.component';

const routes: Routes = [
  { path: '', component: SobreNosotrosComponent }
];

@NgModule({
  declarations: [
    SobreNosotrosComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes) // ruta hija para lazy loading o modular
  ],
  exports: [
    SobreNosotrosComponent // opcional, si querés usarlo fuera de este módulo
  ]
})
export class SobreNosotrosModule {}
