import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarroPageRoutingModule } from './carro-routing.module';

import { CarroPage } from './carro.page';
import { TabsComponent } from 'src/app/components/tabs/tabs.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarroPageRoutingModule,
    TabsComponent
  ],
  declarations: [CarroPage]
})
export class CarroPageModule {}
