import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandlerFn,
  HttpRequest,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs'; // Import RxJS operators
import { TokenStorageService } from './templates/components/funding/services/token-storage.service';
import { inject } from '@angular/core';

export function authInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  // Get your token (e.g., from local storage, a service, etc.)
  // const token = localStorage.getItem('access_token');

  const tokenStorage = inject(TokenStorageService);
  const token = tokenStorage.getToken();

  // If there's a token, add it to the Authorization header
  if (token) {
    const shouldIntercept = !req.url.includes('token');

    if (shouldIntercept) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
  }

  // Continue with the request
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      // Handle errors here
      return throwError(() => new Error(error.message));
    })
  );
}
