import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  credenciais = { email: '', senha: '' };
  erro: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.erro = '';
    this.authService.login(this.credenciais).subscribe({
      next: (logado) => {
        if (logado) {
          this.router.navigate(['/dashboard']); // redireciona após login
        } else {
          this.erro = 'Email ou senha inválidos';
        }
      },
      error: () => {
        this.erro = 'Erro no servidor. Tente novamente mais tarde.';
      },
    });
  }
}
