// services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, map, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3014/usuarios';
  private readonly CHAVE_AUTH = 'usuarioLogado';

  constructor(private router: Router, private http: HttpClient) {}

  // Registrar usuário
  registrar(usuario: any): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}?email=${usuario.email}`).pipe(
      map((usuarios) => {
        if (usuarios.length > 0) {
          throw new Error('Usuário já cadastrado');
        }
        return usuario;
      }),
      catchError((err) => {
        throw err;
      })
    );
  }

  // Login
  login(credenciais: { email: string; senha: string }): Observable<any> {
    return this.http
      .get<any[]>(`${this.apiUrl}?email=${credenciais.email}`)
      .pipe(
        map((usuarios) => {
          if (usuarios.length === 0) return null;

          const usuario = usuarios[0];

          if (usuario.senha.trim() === credenciais.senha.trim()) {
            return usuario; // retorna o usuário completo
          } else {
            return null;
          }
        }),
        catchError((err) => {
          console.error('Erro ao acessar o banco:', err);
          return of(null);
        })
      );
  }

  logout() {
    localStorage.removeItem(this.CHAVE_AUTH);
    this.router.navigate(['/home']);
  }

  estaAutenticado(): boolean {
    return !!localStorage.getItem(this.CHAVE_AUTH);
  }

  getUsuarioAtual(): any {
    return JSON.parse(localStorage.getItem(this.CHAVE_AUTH) || '{}');
  }
}
