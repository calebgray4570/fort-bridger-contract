import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppWrapperComponent } from './app-wrapper/app-wapper.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { MapsComponent } from './maps/maps.component';
import { RegistrationComponent } from './registration/registration.component';
import { FbraBoardComponent } from './fbra-board/fbra-board.component';
import { EventsComponent } from './events/events.component';
import { RulesAndRegsComponent } from './rules-and-regs/rules-and-regs.component';

@NgModule({
  declarations: [
    AppComponent,
    AppWrapperComponent,
    HomeComponent,
    CarouselComponent,
    MapsComponent,
    RegistrationComponent,
    FbraBoardComponent,
    EventsComponent,
    RulesAndRegsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
