import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//Stores
import { StoreModule } from '@ngrx/store';
import { countryReducer } from 'src/store/country/country.reducer';
import { holidayReducer } from 'src/store/holiday/holiday.reducer';
import { sessionReducer } from 'src/store/session/session.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    StoreModule.forRoot({
      country: countryReducer,
      holiday: holidayReducer,
      session: sessionReducer
    }, {}),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
