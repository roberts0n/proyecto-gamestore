import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-deseos',
  templateUrl: './deseos.page.html',
  styleUrls: ['./deseos.page.scss'],
})
export class DeseosPage implements OnInit {

  constructor(private toastController : ToastController) { }

  ngOnInit() {
  }

  async alertaBoton(mensaje:string){
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2500,
      position: 'top',
    });

    await toast.present();
  }


  botonCompra(){

    this.alertaBoton('Juego añadido al carro!')

  }

  botonEliminar(){

    this.alertaBoton('Juego eliminado de la lista de deseos!')

  }

}
