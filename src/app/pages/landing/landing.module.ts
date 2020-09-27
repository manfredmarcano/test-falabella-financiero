import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [LandingComponent],
    imports: [
        CommonModule,
        LandingRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class LandingModule {}
