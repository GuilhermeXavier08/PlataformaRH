import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Injectable({ providedIn: 'root' })
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const usuario = this.authService.getUsuarioAtual();

    if (!usuario || !usuario.tipoUsuario) {
      this.router.navigate(['/login']);
      return false;
    }

    const rolesPermitidos = route.data['roles'] as string[];

    if (rolesPermitidos.includes(usuario.tipoUsuario)) {
      return true;
    } else {
      this.router.navigate(['/inicio']); // se não tiver acesso, joga pra
      return false;
    }
  }
}
