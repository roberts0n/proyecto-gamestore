import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router'; 


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  standalone: true,
  imports: [IonicModule,RouterModule]
})
export class TabsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
