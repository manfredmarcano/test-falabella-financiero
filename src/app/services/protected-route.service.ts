import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { FormService } from './form.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ProtectedRouteService implements CanActivate {
    constructor(
        private router: Router,
        private formService: FormService
    ) {}

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (state.url === '/renta' && this.formService.isFormCtaCorrienteFirstDataEmpty()) {
            this.router.navigateByUrl('/landing');
            return false;
        }

        return true;
    }
}
