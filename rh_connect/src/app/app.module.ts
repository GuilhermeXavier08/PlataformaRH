import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { CurriculosComponent } from './view/curriculos/curriculos.component';
import { InicioComponent } from './view/inicio/inicio.component';
import { PainelCurriculosComponent } from './view/painel-curriculos/painel-curriculos.component';
import { PainelVagasComponent } from './view/painel-vagas/painel-vagas.component';
import { VagasComponent } from './view/vagas/vagas.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './view/login/login.component';
import { RegistroComponent } from './view/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CurriculosComponent,
    InicioComponent,
    PainelCurriculosComponent,
    PainelVagasComponent,
    VagasComponent,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
