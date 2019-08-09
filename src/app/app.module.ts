import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  //<<<< import it here
import { AppRoutingModule, AppRoutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvestigadorComponent } from './investigador/investigador.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedAlerta } from './alerta/alerta.module';
import { UsuarioComponent } from './usuario/usuario.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import localeEs from '@angular/common/locales/es-CO';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEs, 'es');


@NgModule({
  declarations: [
    AppComponent, InvestigadorComponent,
    UsuarioComponent
  ],
  imports: [    
    BrowserModule,FormsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedAlerta,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
