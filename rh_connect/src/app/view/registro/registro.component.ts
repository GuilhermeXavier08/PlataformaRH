import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Usuario } from '../../models/usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent {
  usuario: Usuario = new Usuario('', '', '');
  erro: string = '';
  sucesso: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  registrar() {
    this.erro = '';
    this.sucesso = '';

    this.authService.registrar(this.usuario).subscribe({
      next: () => {
        this.sucesso = 'Conta criada com sucesso!';
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000);
      },
      error: (err) => {
        this.erro = err.message;
      },
    });
  }
}
