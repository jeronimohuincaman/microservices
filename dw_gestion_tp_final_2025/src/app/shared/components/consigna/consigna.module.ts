// src/app/shared/components/consigna/consigna.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Componente
import { ConsignaComponent } from './consigna.component';

// Módulo de Material
import { MaterialModule } from '../../material/material.module';

const routes: Routes = [{ path: '', component: ConsignaComponent }];

@NgModule({
  declarations: [ConsignaComponent],
  imports: [CommonModule, MaterialModule, RouterModule.forChild(routes)],
})
export class ConsignaModule {}
