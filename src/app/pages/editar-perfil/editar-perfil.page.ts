import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.page.html',
  styleUrls: ['./editar-perfil.page.scss'],
})
export class EditarPerfilPage implements OnInit {

  email: string ="";
  usuario: string ="";
  password: string ="";
  edad! : number ;


  constructor(private router:Router,private alertcontroller: AlertController,private toastController: ToastController,private menuController: MenuController) { }

  ngOnInit() {
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


  editarUsuario(){


    if(!this.usuario|| !this.password || !this.edad){
      this.alertaError('No puedes dejar campos vacios')
      return;
    };



    if (this.password.length<=8){
      this.alertaError('la contraseña debe tener mas de 8 caracteres.')
      return;
    }

     this.router.navigate(['/perfil']);
     this.alertaRegistro('perfil editado con exito!')



  }

}
