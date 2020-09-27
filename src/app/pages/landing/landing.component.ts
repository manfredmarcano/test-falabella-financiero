import { Component, OnInit, ElementRef, Renderer2, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LegacyDataComponent } from '../../components/legacy-data/legacy-data';
import { fadeInAnimation } from 'src/app/utils/animations/fade-in.animation';
import { slideInOutAnimation } from 'src/app/utils/animations/slide-in-out.animation';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss'],
    // make fade in animation available to this component
    animations: [fadeInAnimation],

    // attach the fade in animation to the host (root) element of this component
    // tslint:disable-next-line: no-host-metadata-property
    host: { '[@fadeInAnimation]': '' }
})
export class LandingComponent extends LegacyDataComponent implements OnInit, OnDestroy {
    public requestForm: FormGroup;

    constructor(
        elemTag: ElementRef,
        renderer: Renderer2,
        private formBuilder: FormBuilder
    ) {
        super(elemTag, renderer);
    }

    ngOnInit() {
        this.requestForm = this.formBuilder.group({
            rut: ['', Validators.required],
            phone: ['', Validators.required],
            email: ['', Validators.required]
            // email: ['', [Validators.required, Validators.email]],
        });
    }
}
