import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { VagasComponent } from './components/vagas/vagas.component';
import { CurriculoComponent } from './components/curriculo/curriculo.component';
import { AdminVagasComponent } from './components/admin-vagas/admin-vagas.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsuarioComponent } from './models/usuario/usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    VagasComponent,
    CurriculoComponent,
    AdminVagasComponent,
    NavbarComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
