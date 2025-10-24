import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tabla-dinamica',
  templateUrl: './tabla-dinamica.component.html',
  styleUrls: ['./tabla-dinamica.component.scss']
})
export class TablaDinamicaComponent {
  @Input() columnsNames: string[] = [];
  @Input() columnsKey: string[] = [];
  @Input() data: any[] = [];

  @Output() accionRealizada = new EventEmitter<{}>();

  notificarAccion(element: any, type: 'delete' | 'update') {

    const accion = {
      type: type,
      value: element
    }

    this.accionRealizada.emit(accion);
  }
}
