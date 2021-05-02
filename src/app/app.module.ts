import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { FooterComponent } from './footer/footer.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { NotFoundComponent } from './not-found/not-found.component';

// Servicios
import { EquipoService } from './services/equipo.service';

const rutas: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'notFound', component: NotFoundComponent },
  { path: '', component: InicioComponent, pathMatch: 'full' },
  { path: '**', redirectTo: 'notFound', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    FooterComponent,
    CuerpoComponent,
    ContactoComponent,
    InicioComponent,
    NosotrosComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [
    EquipoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
