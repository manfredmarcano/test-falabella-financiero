import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LegacyDataComponent } from '../../components/legacy-data/legacy-data';
import { fadeInAnimation } from 'src/app/utils/animations/fade-in.animation';
import { FormService } from 'src/app/services/form.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss'],
    animations: [fadeInAnimation],
    // attach the fade in animation to the host (root) element of this component
    // tslint:disable-next-line: no-host-metadata-property
    host: { '[@fadeInAnimation]': '' }
})
export class LandingComponent extends LegacyDataComponent implements OnInit, OnDestroy {
    public requestForm: FormGroup;

    constructor(
        public elemTag: ElementRef,
        private router: Router,
        private formBuilder: FormBuilder,
        private formService: FormService
    ) {
        super(elemTag);
    }

    ngOnInit() {
        this.requestForm = this.formBuilder.group({
            rut: ['', Validators.required],
            phone: ['', Validators.required],
            email: ['', Validators.required]
        });
    }

    continue = () => {
        if (!this.requestForm.valid) {
            return;
        }

        this.formService.setFormCtaCorrienteFirstData(this.requestForm.value);
        this.router.navigate(['/renta']);
    }
}
