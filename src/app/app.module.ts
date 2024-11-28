import { importProvidersFrom, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { interceptorInterceptor } from './interceptors/interceptor.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    provideHttpClient(withInterceptors([interceptorInterceptor])),
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    importProvidersFrom(
      HttpClientModule
    ),
    
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
