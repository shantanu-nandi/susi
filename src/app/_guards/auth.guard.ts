import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, pipe } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from '../_services/auth.service';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.authService.user$.pipe(
        take(1),
        map(user => {
          if(!user) {
            this.authService.redirectUrl = state.url;
            this.router.navigate(['/sign-in']);
            return false;
          }

          return true;
        })
      );
  }
}
