import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './modules/home/components/home.component';
import { FacturasComponent } from './modules/facturas/components/facturas.component';
import { UsuariosComponent } from './modules/usuarios/components/usuarios.component';
import { ProductosComponent } from './modules/productos/components/productos.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'usuarios', component: UsuariosComponent },
      { path: 'facturas', component: FacturasComponent },
      { path: 'productos', component: ProductosComponent }
    ]
  },
  { path: '**', redirectTo: '' } // ruta wildcard
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
