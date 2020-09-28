import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LegacyDataComponent } from 'src/app/components/legacy-data/legacy-data';
import { fadeInAnimation } from 'src/app/utils/animations/fade-in.animation';
import { Subscription } from 'rxjs';
import { FormService } from 'src/app/services/form.service';

@Component({
    selector: 'app-renta',
    templateUrl: './renta.component.html',
    styleUrls: ['./renta.component.scss'],
    animations: [fadeInAnimation],
    // attach the fade in animation to the host (root) element of this component
    // tslint:disable-next-line: no-host-metadata-property
    host: { '[@fadeInAnimation]': '' }
})
export class RentaComponent extends LegacyDataComponent implements OnInit, OnDestroy {
    public rentForm: FormGroup;
    public loading: boolean;
    public successRequest: boolean;
    public failedRequest: string;
    public submittedRequest: boolean;
    public formSubscription: Subscription;

    constructor(
        public elemTag: ElementRef,
        private formService: FormService,
        private formBuilder: FormBuilder
    ) {
        super(elemTag);
    }

    ngOnInit() {
        this.rentForm = this.formBuilder.group({
            amount: ['', Validators.required]
        });

        this.submittedRequest = false;
        this.successRequest = false;
        this.failedRequest = '';
    }

    continue = () => {
        if (!this.rentForm.valid) {
            return;
        }

        this.loading = true;
        this.submittedRequest = true;
        this.failedRequest = '';
        this.rentForm.get('amount').disable();

        this.formSubscription = this.formService.setFormCtaCorrienteSecondData({ rent: this.rentForm.get('amount').value })
        .subscribe(
            (res: any) => {
                this.successRequest = true;
            },
            (err: any) => {
                this.loading = false;
                this.rentForm.get('amount').enable();

                if (typeof err.status !== 'undefined' && err.status === 400) {
                    this.failedRequest = 'Error en datos de solicitud';
                    return;
                }

                this.failedRequest = 'No pudimos procesar su solicitud, intente nuevamente.';
            }
        );
    }

    ngOnDestroy() {
        if (this.formSubscription) {
            this.formSubscription.unsubscribe();
        }
    }
}
