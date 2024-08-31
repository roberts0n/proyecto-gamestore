import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
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
      }
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
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
