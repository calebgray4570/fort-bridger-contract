import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import bootstrap from "bootstrap";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppWrapperComponent } from './app-wrapper/app-wapper.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { TabTwoComponent } from './tab-two/tab-two.component';
import { RegistrationComponent } from './registration/registration.component';
import { FbraBoardComponent } from './fbra-board/fbra-board.component';

@NgModule({
  declarations: [
    AppComponent,
    AppWrapperComponent,
    HomeComponent,
    CarouselComponent,
    TabTwoComponent,
    RegistrationComponent,
    FbraBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
