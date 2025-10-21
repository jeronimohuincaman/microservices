import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './modules/home/components/home.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'facturas',
        loadChildren: () =>
          import('./modules/facturas/facturas.module').then(m => m.FacturasModule)
      },
      {
        path: 'usuarios',
        loadChildren: () =>
          import('./modules/usuarios/usuarios.module').then(m => m.UsuariosModule)
      },
      {
        path: 'productos',
        loadChildren: () =>
          import('./modules/productos/productos.module').then(m => m.ProductosModule)
      },
      {
        path:'sobre-nosotros',
        loadChildren: () =>
          import('./shared/components/sobre-nosotros/sobre-nosotros.module').then(m => m.SobreNosotrosModule)
      },
      {
        path:'consigna',
        loadChildren: () =>
          import('./shared/components/consigna/consigna.module').then(m => m.ConsignaModule)
      }
    ]
  },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
