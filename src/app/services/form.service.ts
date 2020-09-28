import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../models/cta-corriente.model';

@Injectable({
    providedIn: 'root'
})
export class FormService {
    private formCtaCorriente: Client;

    constructor(
        private http: HttpClient
    ) {
        this.resetForms();
    }

    resetForms = (): void => {
        this.formCtaCorriente = {
            rut: null,
            phone: null,
            email: null,
            rent: null
        };
    }

    setFormCtaCorrienteFirstData = (firstData: Client): void => {
        this.formCtaCorriente = { ...this.formCtaCorriente, ...firstData };
    }

    setFormCtaCorrienteSecondData = (secondData: Client): Observable<any> => {
        this.formCtaCorriente = { ...this.formCtaCorriente, ...secondData };
        return this.http.post('/api/v1/account', this.formCtaCorriente);
    }

    isFormCtaCorrienteFirstDataEmpty = (): boolean => {
        return (
            (typeof this.formCtaCorriente.rut === 'undefined' || this.formCtaCorriente.rut === null)
            ||
            (typeof this.formCtaCorriente.phone === 'undefined' || this.formCtaCorriente.phone === null)
            ||
            (typeof this.formCtaCorriente.email === 'undefined' || this.formCtaCorriente.email === null)
        );
    }
}
