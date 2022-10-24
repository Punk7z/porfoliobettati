import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { FixedComponent } from './componentes/fixed/fixed.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { EstudiosComponent } from './componentes/estudios/estudios.component';
import { HardnsoftComponent } from './componentes/hardnsoft/hardnsoft.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    FixedComponent,
    ProyectosComponent,
    EstudiosComponent,
    HardnsoftComponent,
    ExperienciaComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
