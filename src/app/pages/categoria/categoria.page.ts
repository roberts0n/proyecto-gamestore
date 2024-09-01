import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage implements OnInit {

  titulo : string = "";
  filtro : string = "";

  constructor(private router: Router, private activedroute: ActivatedRoute) {
    
    this.activedroute.queryParams.subscribe(param =>{

      if(this.router.getCurrentNavigation()?.extras.state){

        this.titulo = this.router.getCurrentNavigation()?.extras?.state?.['titulo'];
        this.filtro = this.router.getCurrentNavigation()?.extras?.state?.['filtro'];
      }
    })



   }

  ngOnInit() {
  }

}
