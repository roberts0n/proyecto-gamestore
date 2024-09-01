import { Component, OnInit } from '@angular/core';

import {
} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, MenuController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: string = "";
  password: string = "";

  usuarioAdmin: string ="admin";
  passwordAdmin: string = "hola12345"


  

  constructor(private router:Router,private alertcontroller: AlertController,private toastController: ToastController,private menuController: MenuController) {
    this.menuController.enable(false,'menu');
   }
  ngOnInit() {
  }

  async alertaError(mensaje:string){
    const alerta = await this.alertcontroller.create({
      header: 'Error al logear',
      message: mensaje,
      buttons: ['Aceptar']
    });
    
    await alerta.present();
  }
  async alertaLogin(mensaje:string){
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2500,
      position: 'top',
    });

    await toast.present();
  }

  verificarLogin(){

   /*  console.log(`Usuario ingresado: ${this.usuario}`);
    console.log(`Contraseña ingresada: ${this.password}`);
    console.log(`Usuario admin: ${this.usuarioAdmin}`);
    console.log(`Contraseña admin: ${this.passwordAdmin}`);
   */

    if (this.usuario.trim()==="" || this.password.trim()===""){
       this.alertaError('No puedes dejar campos vacios');
       return;
   };

   if (this.usuario===this.usuarioAdmin && this.password===this.passwordAdmin ){
    this.router.navigate(['/inicio']);
    this.alertaLogin('Logeo exitoso! disfruta de nuestra tienda')
    this.menuController.enable(true,'menu');
   }
   else{
      this.alertaError('Los datos no coinciden');
      return;
   }

  };

}



 /* this.formularioLogin = this.fb.group({
      'nombre' : new FormControl("",Validators.required),
      'password' : new FormControl("",Validators.required)
    }) */


    /*   if (this.usuario==="" || this.password===""){
        this.alertaError('No puedes dejar campos vacios');
        return;
    };
  */