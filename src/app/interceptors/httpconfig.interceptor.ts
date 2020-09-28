import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { getBrowserVersion, getOS } from '../utils/utils';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        request = request.clone({ headers: request.headers.set('x-user-browser', getBrowserVersion()) });
        request = request.clone({ headers: request.headers.set('x-user-os', getOS()) });
        return next.handle(request);
    }
}
