import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'categoria',
    loadChildren: () => import('./pages/categoria/categoria.module').then( m => m.CategoriaPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'carro',
    loadChildren: () => import('./pages/carro/carro.module').then( m => m.CarroPageModule)
  },
  {
    path: 'tabs',
    loadComponent: () => import('./components/tabs/tabs.component').then((c)=>c.TabsComponent),
    children:[
      {
        path: 'inicio',
        loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
      },
      {
        path: 'carro',
        loadChildren: () => import('./pages/carro/carro.module').then( m => m.CarroPageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
      },
      {
        path: 'deseos',
        loadChildren: () => import('./pages/deseos/deseos.module').then( m => m.DeseosPageModule)
      },
      {
        path: 'categoria',
        loadChildren: () => import('./pages/categoria/categoria.module').then( m => m.CategoriaPageModule)
      },
    ]
  },
  {
    path: 'deseos',
    loadChildren: () => import('./pages/deseos/deseos.module').then( m => m.DeseosPageModule)
  },
  {
    path: 'descripcion',
    loadChildren: () => import('./pages/descripcion/descripcion.module').then( m => m.DescripcionPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'menu-admin',
    loadChildren: () => import('./pages/crud/menu-admin/menu-admin.module').then( m => m.MenuAdminPageModule)
  },
  {
    path: 'registro-juego',
    loadChildren: () => import('./pages/crud/registro-juego/registro-juego.module').then( m => m.RegistroJuegoPageModule)
  },
  {
    path: 'editar-juegos',
    loadChildren: () => import('./pages/crud/editar-juegos/editar-juegos.module').then( m => m.EditarJuegosPageModule)
  },
  {
    path: 'editar',
    loadChildren: () => import('./pages/crud/editar/editar.module').then( m => m.EditarPageModule)
  },
  {
    path: 'editar-cuentas',
    loadChildren: () => import('./pages/crud/editar-cuentas/editar-cuentas.module').then( m => m.EditarCuentasPageModule)
  },
  {
    path: 'editar-usuario',
    loadChildren: () => import('./pages/crud/editar-usuario/editar-usuario.module').then( m => m.EditarUsuarioPageModule)
  },
  {
    path: 'editar-perfil',
    loadChildren: () => import('./pages/editar-perfil/editar-perfil.module').then( m => m.EditarPerfilPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/notfound/notfound.module').then( m => m.NotfoundPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
