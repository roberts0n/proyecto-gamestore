import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cambio-clave',
  templateUrl: './cambio-clave.page.html',
  styleUrls: ['./cambio-clave.page.scss'],
})
export class CambioClavePage implements OnInit {

  password: string = "";
  codigo : string = "";
  codigoReal : string = "12345";

  constructor(private router:Router,private alertcontroller: AlertController,private toastController: ToastController,private menuController: MenuController) { }

  ngOnInit() {
  }
  
   async alertaError(mensaje:string){
    const alerta = await this.alertcontroller.create({
      header: 'Error al cambiar contraseña',
      message: mensaje,
      buttons: ['Aceptar']
    });

    
    
    await alerta.present();
  }

  async alertaCambio(mensaje:string){
    const alerta = await this.alertcontroller.create({
      header: 'Cambio exitoso!',
      message: mensaje,
      buttons: ['Aceptar']
    });

    
    
    await alerta.present();
  }

  verificarLogin(){

    /*  console.log(`Usuario ingresado: ${this.usuario}`);
     console.log(`Contraseña ingresada: ${this.password}`);
     console.log(`Usuario admin: ${this.usuarioAdmin}`);
     console.log(`Contraseña admin: ${this.passwordAdmin}`);
    */
 
     if (this.password.trim()===""){
        this.alertaError('No puedes dejar campos vacios. Intenta nuevamente');
        return;
    };

    if (this.password.length<=8){
      this.alertaError('la contraseña debe tener mas de 8 caracteres. Intenta nuevamente')
      return;
    }
 
    
     this.router.navigate(['/login']);
     this.alertaCambio('Cambio exitoso! Inicia sesion ahora')
  
   };

   async cambioClave(){
    const alerta = await this.alertcontroller.create({
      header: 'Cambiar contraseña',
      inputs: [
        {
          name: 'password',
          type: 'password',
          placeholder : 'Contraseña:'
        }
      ],
      buttons: [{
        text : 'Aceptar',
        handler: data =>{
          this.password = data.password;
          this.verificarLogin();
        }
      }]
    });
    await alerta.present();
  };

  comprobarCodigo(){

    if ( this.codigo===""){
      this.alertaError('No puedes dejar campos vacios');
      return;
  };
    
    if(this.codigo===this.codigoReal){
      this.cambioClave();
    }
    else{
      this.alertaError('Codigo ingresado no coincide.')
      return;
    }
  };


}
