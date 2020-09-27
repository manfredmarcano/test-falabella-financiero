import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RentaRoutingModule } from './renta-routing.module';
import { RentaComponent } from './renta.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [RentaComponent],
    imports: [
        ReactiveFormsModule,
        RentaRoutingModule,
        CommonModule,
        FormsModule
    ]
})
export class RentaModule {}
