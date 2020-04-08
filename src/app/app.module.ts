import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { BannerComponent } from './components/banner/banner.component';
import { NavbarDesktopComponent } from './components/navbar-desktop/navbar-desktop.component';
import { NavbarMobileComponent } from './components/navbar-mobile/navbar-mobile.component';
import { ProductosComponent } from './components/pages/productos/productos.component';
import { NavbarTabletComponent } from './components/navbar-tablet/navbar-tablet.component';
import { NotificationBarComponent } from './components/notification-bar/notification-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    BannerComponent,
    NavbarDesktopComponent,
    NavbarMobileComponent,
    ProductosComponent,
    NavbarTabletComponent,
    NotificationBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
