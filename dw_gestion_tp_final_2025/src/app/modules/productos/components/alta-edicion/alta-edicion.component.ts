import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alta-edicion',
  templateUrl: './alta-edicion.component.html',
  styleUrl: './alta-edicion.component.scss'
})
export class AltaEdicionComponent {
  constructor(
    private router: Router
  ) { }

  goBack() {
    this.router.navigate(['productos']);
  }
}
