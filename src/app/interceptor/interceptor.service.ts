import { HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../api/auth.service';
import { HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.auth.getToken()

    let request = req.clone()
    
    if (token) {
      request = req.clone({ setHeaders: { Authorization: token } })
    }

    return next.handle(request).pipe(
      tap((err: any) => {
        if (err instanceof HttpErrorResponse) {
          localStorage.removeItem('token')
          this.router.navigateByUrl('/')
        }
      })
    )
  }
}
