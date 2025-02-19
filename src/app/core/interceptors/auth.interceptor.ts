import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Obtiene el token desde localStorage o cualquier otro servicio de autenticación
    const token = localStorage.getItem('authToken');

    // Clona la solicitud y agrega el token si está disponible
    let authReq = req;
    if (token) {
      authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    // Manejo de errores globales
    return next.handle(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          console.error('No autorizado - Redirigir a login');
          // Redirigir al login o mostrar mensaje de sesión expirada
        }
        if (error.status === 500) {
          console.error('Error en el servidor');
        }
        return throwError(() => error);
      })
    );
  }
}