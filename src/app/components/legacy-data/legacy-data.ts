import { OnInit, ElementRef, OnDestroy, Component } from '@angular/core';

export abstract class LegacyDataComponent implements OnInit, OnDestroy {
    ngOnInit(): void {}
    ngOnDestroy(): void {}

    constructor(
        public elemTag: ElementRef
    ) {}
}
