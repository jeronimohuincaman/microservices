import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabla-dinamica',
  templateUrl: './tabla-dinamica.component.html',
  styleUrls: ['./tabla-dinamica.component.scss']
})
export class TablaDinamicaComponent {
  @Input() columnsNames: string[] = [];
  @Input() columnsKey: string[] = [];
  @Input() data: any[] = [];
}
