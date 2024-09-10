import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  email: string ="";
  usuario: string ="";
  password: string ="";
  password2: string ="";

  constructor(private router:Router,private alertcontroller: AlertController,private toastController: ToastController,private menuController: MenuController) {
    this.menuController.enable(false,'menu'); 
   }


  async alertaError(mensaje:string){
    const alerta = await this.alertcontroller.create({
      header: 'Error al registrarse',
      message: mensaje,
      buttons: ['Aceptar']
    });
    
    await alerta.present();
  }
  async alertaRegistro(mensaje:string){
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2500,
      position: 'top',
    });

    await toast.present();
  }

  registrar(){


    if( !this.email|| !this.usuario|| !this.password){
      this.alertaError('No puedes dejar campos vacios')
      return;
    };


    const formatoEmail =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!formatoEmail.test(this.email)){
      this.alertaError('Correo invalido.')
      return;
    };

    if (this.password.length<=8){
      this.alertaError('la contraseña debe tener mas de 8 caracteres.')
      return;
    }

    const formatoPassword = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).*$/;
    if(!formatoPassword.test(this.password)){
      this.alertaError('La contraseña debe contener como minimo una mayuscula,un numero y un simbolo.')
      return;
    }

    if(this.password===this.password2){
      this.router.navigate(['/login']);
      this.alertaRegistro('Registro exitoso!')
    }else{
      this.alertaError('Las claves no coinciden')
    }



  }


  ngOnInit() {
  }

}
