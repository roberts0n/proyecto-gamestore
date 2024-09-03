import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-editar-juegos',
  templateUrl: './editar-juegos.page.html',
  styleUrls: ['./editar-juegos.page.scss'],
})
export class EditarJuegosPage implements OnInit {

  constructor(private toastController : ToastController,private router:Router) { }

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

  botonEliminar(){

    this.alertaBoton('Juego eliminado con exito!')


  }

}
