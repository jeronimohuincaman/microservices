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
  ];

  isOpen = true; // Manejo de responsive

}
