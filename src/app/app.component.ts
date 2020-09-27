import { Component, OnDestroy, Renderer2 } from '@angular/core';
import { HeaderService } from './services/header.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { Router, NavigationStart } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
    private menuSubscription: Subscription;
    private routerSubscription: Subscription;

    constructor(
        private headerService: HeaderService,
        public router: Router,
        private renderer: Renderer2
    ) {
        this.routerSubscription = router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                // console.log('Navigation started: ', event);

                this.headerService.closeMenu();
            }

            // NavigationEnd
            // NavigationCancel
            // NavigationError
            // RoutesRecognized
        });
    }

    onOutletLoaded = (component: any) => {
        // component.overlay = true
        console.log('componente cargado: ', component);

        component.overlay = this.headerService.getMenuOpening();

        this.menuSubscription = this.headerService.currentMenuOpening.subscribe((state: boolean) => {
            // console.log('');
            // console.log(component);
            // console.log(`-----> Cambió el menú: `, state);

            if (state) {
                this.renderer.addClass(component.elemTag.nativeElement, 'overlayed-page');
                return;
            }

            this.renderer.removeClass(component.elemTag.nativeElement, 'overlayed-page');
            // component.overlay = state;
        });
    }

    onOutletUnloaded = (component: any) => {
        console.log('componente quitado del router: ', component);
        if (this.menuSubscription) {
            this.menuSubscription.unsubscribe();
        }
    }

    ngOnDestroy() {
        if (this.routerSubscription) {
            this.routerSubscription.unsubscribe();
        }
    }

    /* getState(outlet: any) {
        return outlet.activatedRouteData.state;
    } */
}
