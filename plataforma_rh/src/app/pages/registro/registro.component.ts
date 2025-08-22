// pages/registro/registro.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {
  nome = '';
  email = '';
  senha = '';

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  registrar() {
    const novoUsuario = new Usuario(this.nome, this.email, this.senha);

    this.usuarioService.registrar(novoUsuario).subscribe(() => {
      alert('Usuário registrado com sucesso!');
      this.router.navigate(['/login']);
    });
  }
}
