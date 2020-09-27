import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
    providedIn: 'root'
})
export class HeaderService {
    private openedMenu = new BehaviorSubject(false);
    public currentMenuOpening = this.openedMenu.asObservable();

    constructor() {}

    toggleMenu = (): void => {
        this.openedMenu.next(!this.openedMenu.getValue());
    }

    getMenuOpening = (): boolean => {
        return this.openedMenu.getValue();
    }

    closeMenu = (): void => {
        this.openedMenu.next(false);
    }
}
