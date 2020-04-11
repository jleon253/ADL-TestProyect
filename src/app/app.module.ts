import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

//translation
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { BannerComponent } from './components/banner/banner.component';
import { NavbarDesktopComponent } from './components/navbar-desktop/navbar-desktop.component';
import { NavbarMobileComponent } from './components/navbar-mobile/navbar-mobile.component';
import { ProductosComponent } from './components/pages/productos/productos.component';
import { NotificationBarComponent } from './components/notification-bar/notification-bar.component';
import { MenufullComponent } from './components/menufull/menufull.component';
import { ProductResumeComponent } from './components/product-resume/product-resume.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    BannerComponent,
    NavbarDesktopComponent,
    NavbarMobileComponent,
    ProductosComponent,
    NotificationBarComponent,
    MenufullComponent,
    ProductResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
