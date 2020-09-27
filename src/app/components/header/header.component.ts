import { Component, OnInit, OnDestroy } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
    public openedMenu: boolean;
    private menuSubscription: Subscription;
    public wasClickedInsideComponent = false;

    constructor(
        private headerService: HeaderService
    ) {}

    ngOnInit() {
        this.menuSubscription = this.headerService.currentMenuOpening.subscribe((state: boolean) => this.openedMenu = state);
    }

    ngOnDestroy() {
        if (this.menuSubscription) {
            this.menuSubscription.unsubscribe();
        }
    }

    toggleMenu = () => this.headerService.toggleMenu();

    clickedInside($event: any) {
        const target = ($event.target as HTMLElement).classList.contains('overlay');
        if (target) {
            this.headerService.closeMenu();
        }
    }
}
