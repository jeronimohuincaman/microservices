import { Component } from '@angular/core';
import { ISidebarItem } from './sidebar.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  menuItems: ISidebarItem[] = [
    { label: 'Dashboard', icon: 'home', route: '/dashboard' },
    { label: 'Facturas', icon: 'point_of_sale', route: '/facturas' },
    { label: 'Productos', icon: 'category', route: '/productos' },
    { label: 'Usuarios', icon: 'group', route: '/usuarios' },
  ];

  isOpen = true; // Manejo de responsive

}
