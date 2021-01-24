import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarModule } from './@componets/navbar/navbar.module';
import { HeaderModule } from './@componets/header/header.module';
import { PortfolioModule } from './@componets/portfolio/portfolio.module';
import { AboutModule } from './@componets/about/about.module';
import { ContactModule } from './@componets/contact/contact.module';
import { FooterModule } from './@componets/footer/footer.module';
import { CopyrightModule } from './@componets/copyright/copyright.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NavbarModule,
    HeaderModule,
    PortfolioModule,
    AboutModule,
    ContactModule,
    FooterModule,
    CopyrightModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
