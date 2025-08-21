import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './component/inicio/inicio.component';
import { CurriculoComponent } from './component/curriculo/curriculo.component';
import { VagaComponent } from './component/vaga/vaga.component';
import { PainelVagasComponent } from './component/painel-vagas/painel-vagas.component';
import { PainelCurriculosComponent } from './component/painel-curriculos/painel-curriculos.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'vagas', component: VagaComponent },
  { path: 'painel_vagas', component: PainelVagasComponent },
  { path: 'curriculos', component: CurriculoComponent },
  { path: 'painel_curriculos', component: PainelCurriculosComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: '**', redirectTo: '/inicio' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
