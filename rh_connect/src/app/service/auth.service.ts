import { HttpClient } from '@angular/common/http';
import { LocalizedString } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { catchError, map, Observable, switchMap, tap, throwError } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3014/usuarios';
  private readonly CHAVE_AUTH = 'usuarioLogado';

  // 🔹 Estado reativo do usuário logado
  private usuarioSubject = new BehaviorSubject<any>(this.getUsuarioAtual());
  usuario$ = this.usuarioSubject.asObservable();

  constructor(private router: Router, private http: HttpClient) {}

  registrar(usuario: any): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}?email=${usuario.email}`).pipe(
      switchMap((usuarios) => {
        if (usuarios.length > 0) {
          return throwError(() => new Error('Usuário já cadastrado'));
        } else {
          usuario.tipoUsuario = 'comum';
          return this.http.post(this.apiUrl, usuario);
        }
      })
    );
  }

  login(credenciais: any): Observable<boolean> {
    return this.http
      .get<any[]>(
        `${this.apiUrl}?email=${credenciais.email}&senha=${credenciais.senha}`
      )
      .pipe(
        map((usuarios) => {
          if (usuarios.length > 0) {
            localStorage.setItem(this.CHAVE_AUTH, JSON.stringify(usuarios[0]));
            this.usuarioSubject.next(usuarios[0]); // 🔹 atualiza o estado
            return true;
          } else {
            return false;
          }
        })
      );
  }

  logout() {
    localStorage.removeItem(this.CHAVE_AUTH);
    this.usuarioSubject.next(null); // 🔹 atualiza o estado
    this.router.navigate(['/home']);
  }

  estaAutenticado(): boolean {
    return !!localStorage.getItem(this.CHAVE_AUTH);
  }

  getUsuarioAtual(): any {
    return JSON.parse(localStorage.getItem(this.CHAVE_AUTH) || 'null');
  }
}
