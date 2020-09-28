import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [LandingComponent],
    imports: [
        LandingRoutingModule,
        ReactiveFormsModule,
        CommonModule,
        FormsModule
    ]
})
export class LandingModule {}
