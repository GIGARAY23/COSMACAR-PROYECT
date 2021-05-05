import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './componentes/menu/menu.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { EstadosComponent } from './paginas/estados/estados.component';
import { ContactosComponent } from './paginas/contactos/contactos.component';
import { ManteniminetoComponent } from './paginas/mantenimiento/mantenimineto.component';
import { CalificacionComponent } from './paginas/calificacion/calificacion.component';
import { ServiciosComponent } from './paginas/servicios/servicios.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { UsuarioComponent } from './paginas/usuario/usuario.component';
import { FormsModule } from '@angular/forms';

import { environment } from '../environments/environment.prod';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { firebaseConfig } from '../environments/environment';
import { SetManteniminetoComponent } from './set-mantenimineto/set-mantenimineto.component';

import { VermantenimientoComponent } from './paginas/vermantenimiento/vermantenimiento.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    InicioComponent,
    EstadosComponent,
    ContactosComponent,
    ManteniminetoComponent,
    VermantenimientoComponent,
    CalificacionComponent,
    ServiciosComponent,
    UsuarioComponent,
    FormularioComponent,
    SetManteniminetoComponent,
    
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    
  ],

  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
