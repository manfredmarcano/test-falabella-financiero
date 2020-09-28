import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpConfigInterceptor } from './interceptors/httpconfig.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { HeaderService } from './services/header.service';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserModule
    ],
    declarations: [
        HeaderComponent,
        AppComponent
    ],
    providers: [
        HeaderService,
        { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
