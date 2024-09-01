import { Component, OnInit } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import {MatMenuModule} from '@angular/material/menu';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonicModule,RouterLinkWithHref,MatMenuModule,CommonModule]
})
export class HeaderComponent  implements OnInit {

  mostrarLista = false;

  activarLista(){
    this.mostrarLista = !this.mostrarLista;
  }

  constructor() { }

  ngOnInit() {}

}
