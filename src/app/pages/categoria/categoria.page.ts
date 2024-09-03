import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController, MenuController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage implements OnInit {

  titulo : string = "";
  filtro : string = "";

  constructor(private router: Router, private activedroute: ActivatedRoute,private menuController: MenuController,private alertcontroller: AlertController,private toastController: ToastController) {
    
    this.activedroute.queryParams.subscribe(param =>{

      if(this.router.getCurrentNavigation()?.extras.state){

        this.titulo = this.router.getCurrentNavigation()?.extras?.state?.['titulo'];
        this.filtro = this.router.getCurrentNavigation()?.extras?.state?.['filtro'];
      }
    })



   }

  ngOnInit() {
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

   async alertaBoton(mensaje:string){
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2500,
      position: 'top',
    });

    await toast.present();
  }

  botonDeseo(){

    this.alertaBoton('Juego añadido a la lista de deseos!')

  }



}
