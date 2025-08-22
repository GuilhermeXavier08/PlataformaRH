// pages/login/login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email = '';
  senha = '';
  erro = '';

  constructor(private authService: AuthService, private router: Router) {}

  logar() {
    if (!this.email || !this.senha) {
      this.erro = 'Preencha todos os campos';
      return;
    }

    this.authService.login({ email: this.email, senha: this.senha }).subscribe({
      next: (usuario) => {
        if (usuario) {
          // Salva o usuário no localStorage antes de navegar
          localStorage.setItem('usuarioLogado', JSON.stringify(usuario));

          // Pequeno timeout garante que o Angular registre a mudança antes do guard
          setTimeout(() => {
            this.router.navigate(['/home']);
          }, 10);
        } else {
          this.erro = 'Email ou senha inválidos!';
        }
      },
      error: (err) => {
        console.error(err);
        this.erro = 'Erro ao tentar logar!';
      },
    });
  }
}
