import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar-clave',
  templateUrl: './recuperar-clave.page.html',
  styleUrls: ['./recuperar-clave.page.scss'],
})
export class RecuperarClavePage implements OnInit {

  email: string = "";
  emailAdmin : string = "admin@gmail.com";

  constructor(private router:Router,private alertcontroller: AlertController,private toastController: ToastController) { }

  ngOnInit() {
  }

  async alertaError(mensaje:string){
    const alerta = await this.alertcontroller.create({
      header: 'Error en el correo',
      message: mensaje,
      buttons: ['Aceptar']
    });

    
    
    await alerta.present();
  };

  async alertaChequeo(mensaje:string){
    const alerta = await this.alertcontroller.create({
      header: 'Correo aceptado!',
      message: mensaje,
      buttons: ['Aceptar']
    });

    
    
    await alerta.present();
  };



  comprobarEmail(){
  
  if( !this.email){
    this.alertaError('No puedes dejar campos vacios')
    return;
  };

  const formatoEmail =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!formatoEmail.test(this.email)){
    this.alertaError('Correo invalido.')
    return;
  };

  if(this.email===this.emailAdmin){
    this.alertaChequeo('Te hemos enviado un codigo a tu correo.')
    this.router.navigate(['/cambio-clave']);

  }else{
    this.alertaError('Correo no registrado')
    return;
  }

  };

}
