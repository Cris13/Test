import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {LoginEffects} from './login/store/login.effects';
import {HttpClientModule} from '@angular/common/http';
import {reducers} from './shared/store';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([LoginEffects])],
  providers: [{provide: RouteReuseStrategy, useClass: IonicRouteStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule {
}
