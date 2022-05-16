import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private tokenService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    const accessToken = this.tokenService.getToken();
    req = req.clone({
        setHeaders: {
            Authorization: "Bearer " + accessToken
        }
    });
    return next.handle(req);
}
}
