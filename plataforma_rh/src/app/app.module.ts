import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurriculoComponent } from './components/curriculo/curriculo.component';
import { VagasComponent } from './components/vagas/vagas.component';
import { HeaderComponent } from './templates/header/header.component';
import { FooterComponent } from './templates/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { PainelVagasComponent } from './components/painel-vagas/painel-vagas.component';
import { FormsModule } from '@angular/forms';
import { PainelCurriculosComponent } from './components/painel-curriculos/painel-curriculos.component';

@NgModule({
  declarations: [
    AppComponent,
    CurriculoComponent,
    VagasComponent,
    HeaderComponent,
    FooterComponent,
    PainelVagasComponent,
    PainelCurriculosComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
