import { AuthServiceService } from './auth-service.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    public authService : AuthServiceService,
    private router : Router
    ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | Promise<boolean> {
    var isAuthenticated = this.authService.isLoggedIn;
    if (!isAuthenticated) {
        this.router.navigate(['/login']);
    }

    return isAuthenticated;
  }
}
