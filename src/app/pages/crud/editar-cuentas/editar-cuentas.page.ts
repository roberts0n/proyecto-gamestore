import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-editar-cuentas',
  templateUrl: './editar-cuentas.page.html',
  styleUrls: ['./editar-cuentas.page.scss'],
})
export class EditarCuentasPage implements OnInit {

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

    this.alertaBoton('usuario eliminado con exito!')


  }


}
