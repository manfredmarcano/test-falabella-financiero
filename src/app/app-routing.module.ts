import { ProtectedRouteService } from './services/protected-route.service';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'landing',
        pathMatch: 'full'
    },
    {
        path: 'landing',
        loadChildren: () => import('./pages/landing/landing.module').then(m => m.LandingModule)
    },
    {
        path: 'renta',
        loadChildren: () => import('./pages/renta/renta.module').then(m => m.RentaModule),
        canActivate: [ProtectedRouteService]
    },
    {
        path: '**',
        redirectTo: 'landing'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
