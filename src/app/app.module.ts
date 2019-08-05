import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  //<<<< import it here
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvestigadorComponent } from './investigador/investigador.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedAlerta } from './alerta/alerta.module';

@NgModule({
  declarations: [
    AppComponent,InvestigadorComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedAlerta
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
