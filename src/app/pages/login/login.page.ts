import { Component, OnInit } from '@angular/core';

import {
} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

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


  

  constructor(private router:Router,private alertcontroller: AlertController) { }
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

  verificarLogin(){

    if (this.usuario.trim()==="" || this.password.trim()===""){
       this.alertaError('No puedes dejar campos vacios');
       return;
   };

   if (this.usuario===this.usuarioAdmin || this.password===this.passwordAdmin ){
    this.router.navigate(['/inicio']);
   }
   else{
      this.alertaError('Los datos no coinciden');
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