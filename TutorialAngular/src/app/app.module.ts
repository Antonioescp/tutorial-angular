import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './shared/app-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { FormularioCiudadComponent } from './formulario-ciudad/formulario-ciudad.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './shared/material.module';
import { ListaCiudadesComponent } from './lista-ciudades/lista-ciudades.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    FormularioCiudadComponent,
    ListaCiudadesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
