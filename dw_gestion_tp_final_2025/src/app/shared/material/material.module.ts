import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// 👉 Importá aquí todos los módulos de Angular Material que vayas usando
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSnackBarModule,
    MatCardModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatGridListModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatDividerModule
  ],
  exports: [
    // Exportarlos para que estén disponibles en cualquier módulo que lo importe
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSnackBarModule,
    MatCardModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatGridListModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatDividerModule
  ]
})
export class MaterialModule {}
