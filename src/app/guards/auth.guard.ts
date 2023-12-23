import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  return true;
};

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  
    constructor(private authService:AuthenticationService, private router:Router){}
  
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
      | Observable<boolean | UrlTree>
      | Promise<boolean | UrlTree>
      | boolean
      | UrlTree {
      if (this.authService.isLoggedIn()) {             
        return true;
      }        
      this.router.navigate(['/stock']);    
      return false;
    }
  
  
  
};
