import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.page.html',
  styleUrls: ['./descripcion.page.scss'],
})
export class DescripcionPage implements OnInit {

  nombre : string = "";
  plataforma : string = "";
  icono : string = "";
  descripcion : string = "";
  precio : string = "";
  imagen : string = "";

  constructor(private router: Router, private activedroute: ActivatedRoute) { 
    this.activedroute.queryParams.subscribe(param =>{

      if(this.router.getCurrentNavigation()?.extras.state){

        this.nombre = this.router.getCurrentNavigation()?.extras?.state?.['nombre'];
        this.plataforma = this.router.getCurrentNavigation()?.extras?.state?.['plataforma'];
        this.icono = this.router.getCurrentNavigation()?.extras?.state?.['icono'];
        this.descripcion = this.router.getCurrentNavigation()?.extras?.state?.['descripcion'];
        this.precio = this.router.getCurrentNavigation()?.extras?.state?.['precio'];
        this.imagen = this.router.getCurrentNavigation()?.extras?.state?.['imagen'];
      }
    })
  }

  ngOnInit() {
  }

}
