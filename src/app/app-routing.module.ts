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
        loadChildren: () => import('./pages/renta/renta.module').then(m => m.RentaModule)
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
