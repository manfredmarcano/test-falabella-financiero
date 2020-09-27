import { Input, OnInit, Renderer2, ElementRef, OnDestroy, Component } from '@angular/core';

@Component({template: ''})
export abstract class LegacyDataComponent implements OnInit, OnDestroy {
    @Input() overlay: boolean;

    ngOnInit(): void {}
    ngOnDestroy(): void {}

    constructor(
        private elemTag: ElementRef,
        private renderer: Renderer2,
        // private form?: any
    ) {
        /*
        console.log('elemTag inside legacy-data: ', elemTag);

        const refOnInit = this.ngOnInit.bind(this);
        this.ngOnInit = () => {
            refOnInit();

            // perform unsubscriptions here
            // eg: for (let s of subscriptions) s.unsubscribe();

            // this.renderer.addClass(this.elemTag.nativeElement, 'manfred-marcano');
        };

        const refOnDestroy = this.ngOnDestroy.bind(this);
        this.ngOnDestroy = () => {
            refOnDestroy();

            // perform unsubscriptions here
            // eg: for (let s of subscriptions) s.unsubscribe();

            console.log('[ngOnDestroy]');
        };
        */
    }
}
