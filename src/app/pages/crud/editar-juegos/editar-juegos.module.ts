import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarJuegosPageRoutingModule } from './editar-juegos-routing.module';

import { EditarJuegosPage } from './editar-juegos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarJuegosPageRoutingModule
  ],
  declarations: [EditarJuegosPage]
})
export class EditarJuegosPageModule {}
