import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescripcionPageRoutingModule } from './descripcion-routing.module';

import { DescripcionPage } from './descripcion.page';
import { TabsComponent } from 'src/app/components/tabs/tabs.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescripcionPageRoutingModule,
    TabsComponent,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [DescripcionPage]
})
export class DescripcionPageModule {}
