import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './view/inicio/inicio.component';
import { CurriculosComponent } from './view/curriculos/curriculos.component';
import { VagasComponent } from './view/vagas/vagas.component';
import { PainelVagasComponent } from './view/painel-vagas/painel-vagas.component';
import { PainelCurriculosComponent } from './view/painel-curriculos/painel-curriculos.component';
import { RegistroComponent } from './view/registro/registro.component';
import { LoginComponent } from './view/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';

const routes: Routes = [
  { path: '', component: InicioComponent },

  // 🔹 Autenticação
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent },

  // 🔹 Dashboard (ambos podem acessar)
  {
    path: 'inicio',
    component: InicioComponent,
    canActivate: [AuthGuard],
  },

  // 🔹 Vagas (acesso livre pra qualquer logado)
  { path: 'vagas',
    component: VagasComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['admin', 'comum'] },
  },

  // 🔹 Rotas restritas a admin
  {
    path: 'curriculos',
    component: CurriculosComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['admin'] },
  },
  {
    path: 'painel-vagas',
    component: PainelVagasComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['admin'] },
  },

  // 🔹 Rotas restritas a usuário comum
  {
    path: 'painel-curriculos',
    component: PainelCurriculosComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['comum'] },
  },

  // 🔹 Fallback
  { path: '**', redirectTo: '', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
