import { Component, OnDestroy, Renderer2 } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { HeaderService } from './services/header.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { FormService } from './services/form.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
    private menuSubscription: Subscription;
    private routerSubscription: Subscription;

    constructor(
        public router: Router,
        private renderer: Renderer2,
        private formService: FormService,
        private headerService: HeaderService
    ) {
        this.routerSubscription = router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                this.headerService.closeMenu();

                if (event.url === '/landing') {
                    this.formService.resetForms();
                }
            }
        });
    }

    onOutletLoaded = (component: any) => {
        this.menuSubscription = this.headerService.currentMenuOpening.subscribe((state: boolean) => {
            if (state) {
                this.renderer.addClass(component.elemTag.nativeElement, 'overlayed-page');
                return;
            }

            this.renderer.removeClass(component.elemTag.nativeElement, 'overlayed-page');
        });
    }

    onOutletUnloaded = (component: any) => {
        if (this.menuSubscription) {
            this.menuSubscription.unsubscribe();
        }
    }

    ngOnDestroy() {
        if (this.routerSubscription) {
            this.routerSubscription.unsubscribe();
        }
    }
}
