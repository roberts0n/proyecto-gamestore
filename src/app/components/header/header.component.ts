import { Component, OnInit } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonicModule,RouterLinkWithHref]
})
export class HeaderComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
