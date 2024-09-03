import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.page.html',
  styleUrls: ['./carro.page.scss'],
})
export class CarroPage implements OnInit {

  constructor(private toastController: ToastController) { }

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

    this.alertaBoton('Juegos comprados con exito!')

  }

  botonEliminar(){

    this.alertaBoton('Juego eliminado del carro!')

  }

}
