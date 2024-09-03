import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registro-juego',
  templateUrl: './registro-juego.page.html',
  styleUrls: ['./registro-juego.page.scss'],
})
export class RegistroJuegoPage implements OnInit {

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

  botonRegistro(){

    this.alertaBoton('Juego registrado con exito!')
    this.router.navigate(['/menu-admin']);


  }


}
