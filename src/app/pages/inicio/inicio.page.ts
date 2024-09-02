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

   descripcionffxvi(){
    let navigationextras : NavigationExtras = {
      state:{
        nombre : 'Final Fantasy XVI',
        plataforma : 'Playstation',
        icono : 'play',
        descripcion : ' Una fantasía oscura épica donde el destino lo deciden los Eikons y los Dominantes que los controlan. Esta es la historia de Clive Rosfield, un guerrero que jura vengarse del Eikon oscuro Ifrit, una entidad misteriosa que deja desgracias a su paso.',
        precio : '40000',
        imagen : '../../../assets/img/ffxvi.jpeg'
      }
    }
    this.router.navigate(['/descripcion'],navigationextras);
   }
   descripcionbg3(){
    let navigationextras : NavigationExtras = {
      state:{
        nombre : 'Baldurs Gate 3',
        plataforma : 'Steam',
        icono : 'steam',
        descripcion : 'Reúne a tu grupo y regresa a los Reinos Olvidados en una historia de compañerismo, traición, sacrificio, supervivencia y la atracción de un poder absoluto.Misteriosas aptitudes empiezan a surgir en tu interior por obra de un parásito de los azotamentes que te implantaron en el cerebro. Resístete y vuelve a la oscuridad contra sí misma o abraza la corrupción y conviértete en el mal supremo.',
        precio : '40000',
        imagen : '../../../assets/img/bg3.jpg'
      }
    }
    this.router.navigate(['/descripcion'],navigationextras);
   }
   descripciond4(){
    let navigationextras : NavigationExtras = {
      state:{
        nombre : 'Diablo IV',
        plataforma : 'Xbox',
        icono : 'xbox',
        descripcion : 'Descubre la franquicia aclamada por la crítica que definió el género de RPG de acción. Mientras la batalla entre los Cielos Superiores y los Infiernos Ardientes continúa, el Odio devora a Santuario mientras el mal se extiende y una nueva oleada de cultistas y adoradores se alza para darle la bienvenida a Lilith. Solo unos pocos valientes se atreven a enfrentarse a esta amenaza y acercar la luz a la abrumadora oscuridad.',
        precio : '40000',
        imagen : '../../../assets/img/d4.png'
      }
    }
    this.router.navigate(['/descripcion'],navigationextras);
   }

  filtroPaginaAccion(){
    let navigationextras : NavigationExtras = {
      state:{
        titulo : 'Categoria: ',
        filtro : 'Accion'
      }
    }
    this.router.navigate(['/categoria'],navigationextras);
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
