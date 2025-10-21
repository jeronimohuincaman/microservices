import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConsignaComponent } from '../../shared/components/consigna/consigna.component';
import { SobreNosotrosComponent } from '../../shared/components/sobre-nosotros/sobre-nosotros.component';

@Component({
  selector: 'app-headerbar',
  templateUrl: './headerbar.component.html',
  styleUrls: ['./headerbar.component.scss']
})
export class HeaderbarComponent {

  constructor(private dialog: MatDialog) {}

  abrirConsigna(): void {
    this.dialog.open(ConsignaComponent, {
      width: '500px',
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '200ms'
    });
  }

  abrirSobreNosotros(): void {
    this.dialog.open(SobreNosotrosComponent, {
      width: '600px',
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '200ms'
    });
  }
}
