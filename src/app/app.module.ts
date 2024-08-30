import { NgModule } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatIconRegistry } from '@angular/material/icon';
import { provideHttpClient } from '@angular/common/http';
import { TabsComponent } from './components/tabs/tabs.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HeaderComponent,TabsComponent],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, provideAnimationsAsync(),provideHttpClient() ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private matIconRegistry: MatIconRegistry,private domSanitizer:DomSanitizer){
    this.matIconRegistry.addSvgIcon(
      'steam',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/img/steam.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'profile',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/img/profile.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'xbox',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/img/xbox.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'switch',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/img/nintendo-switch.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'play',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/img/playstation.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'trash',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/img/trash.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'buy',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/img/buy.svg')
    );
  }
}
