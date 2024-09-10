import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro-juego',
  templateUrl: './registro-juego.page.html',
  styleUrls: ['./registro-juego.page.scss'],
})
export class RegistroJuegoPage implements OnInit {

  nombreJuego : string = "";
  categoria : string = "";
  plataforma : string = "";
  precio! : number ;

  

  constructor(private toastController : ToastController,private router:Router,private alertcontroller: AlertController) { }

  ngOnInit() {
  }

  registroJuego(){
    if(this.nombreJuego==="" || this.categoria==="" || this.plataforma==="" || this.precio === undefined || this.precio === null){
      this.alertaError('No puedes dejar campos vacios')
      return;
    }

    if(this.precio < 0){
      this.alertaError('El precio no puede ser negativo')
      return;
    }

    this.alertaBoton('Juego registrado con exito!')
    this.router.navigate(['/menu-admin']);


  }

  async alertaBoton(mensaje:string){
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2500,
      position: 'top',
    });

    await toast.present();
  }

  async alertaError(mensaje:string){
    const alerta = await this.alertcontroller.create({
      header: 'Error al registrar',
      message: mensaje,
      buttons: ['Aceptar']
    });
    
    await alerta.present();
  }

  botonRegistro(){

    this.alertaBoton('Juego registrado con exito!')
    this.router.navigate(['/menu-admin']);


  }


}
