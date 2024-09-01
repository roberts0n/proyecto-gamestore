import { Component, OnInit } from '@angular/core';
import { NavigationExtras,Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private router: Router,private menuController: MenuController) {  
    this.menuController.enable(true, 'menu');
   }

  filtroPaginaAccion(){
    let navigationextras : NavigationExtras = {
      state:{
        titulo : 'Categoria: ',
        filtro : 'Accion'
      }
    }
    this.router.navigate(['/categoria'],navigationextras)
  };
  filtroPaginaRpg(){
    let navigationextras : NavigationExtras = {
      state:{
        titulo : 'Categoria: ',
        filtro : 'RPG'
      }
    }
    this.router.navigate(['/categoria'],navigationextras)
  };
  filtroPaginaDeportes(){
    let navigationextras : NavigationExtras = {
      state:{
        titulo : 'Categoria: ',
        filtro : 'Deportes'
      }
    }
    this.router.navigate(['/categoria'],navigationextras)
  };
  filtroPaginaSteam(){
    let navigationextras : NavigationExtras = {
      state:{
        titulo : 'Plataforma: ',
        filtro : 'Steam'
      }
    }
    this.router.navigate(['/categoria'],navigationextras)
  };
  filtroPaginaSwitch(){
    let navigationextras : NavigationExtras = {
      state:{
        titulo : 'Plataforma: ',
        filtro : 'Switch'
      }
    }
    this.router.navigate(['/categoria'],navigationextras)
  };
  filtroPaginaXbox(){
    let navigationextras : NavigationExtras = {
      state:{
        titulo : 'Plataforma: ',
        filtro : 'Xbox'
      }
    }
    this.router.navigate(['/categoria'],navigationextras)
  };
  filtroPaginaPlaystation(){
    let navigationextras : NavigationExtras = {
      state:{
        titulo : 'Plataforma: ',
        filtro : 'Playstation'
      }
    }
    this.router.navigate(['/categoria'],navigationextras)
  };

  ngOnInit() {
  }

}
