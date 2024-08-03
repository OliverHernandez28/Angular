import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadosComponent } from './empleados/empleados/empleados.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { FormsModule } from '@angular/forms';
import { DirectivaComponent } from './directiva/directiva.component';
import { CommonModule } from '@angular/common';
import { HijoDirectivaComponent } from './hijo-directiva/hijo-directiva.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    EmpleadoComponent,
    DirectivaComponent,
    HijoDirectivaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
