import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../pages/Users/user.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedGuard implements CanActivate {
    isLogged: boolean = false;
    constructor(private US: UserService, private router: Router) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      this.US.getUserStatus((user: any) => {
        !user ? (this.isLogged = false) : (this.isLogged = true);
      });
      if (!this.isLogged) return true;
      this.router.navigate(['/customers']);
      return false;
    }
  }
