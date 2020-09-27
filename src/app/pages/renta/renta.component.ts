import { Component, OnInit, ElementRef, Renderer2, OnDestroy } from '@angular/core';
import { LegacyDataComponent } from 'src/app/components/legacy-data/legacy-data';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { fadeInAnimation } from 'src/app/utils/animations/fade-in.animation';
import { slideInOutAnimation } from 'src/app/utils/animations/slide-in-out.animation';

@Component({
    selector: 'app-renta',
    templateUrl: './renta.component.html',
    styleUrls: ['./renta.component.scss'],
    // make fade in animation available to this component
    animations: [fadeInAnimation],

    // attach the fade in animation to the host (root) element of this component
    // tslint:disable-next-line: no-host-metadata-property
    host: { '[@fadeInAnimation]': '' }
})
export class RentaComponent extends LegacyDataComponent implements OnInit, OnDestroy {
    public rentForm: FormGroup;

    constructor(
        elemTag: ElementRef,
        renderer: Renderer2,
        private formBuilder: FormBuilder
    ) {
        super(elemTag, renderer);
    }

    ngOnInit() {
        this.rentForm = this.formBuilder.group({
            amount: ['', Validators.required]
        });
    }
}
