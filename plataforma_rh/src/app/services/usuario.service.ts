// services/usuario.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';

@Injectable({ providedIn: 'root' })
export class UsuarioService {
  private apiUrl = 'http://localhost:3014/usuarios'; // URL do JSON-Server ou API

  constructor(private http: HttpClient) {}

  registrar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiUrl, usuario);
  }
}
