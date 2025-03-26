import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  filter,
  finalize,
  Observable,
  Subject,
  switchMap,
  takeUntil,
  tap,
  throwError,
} from 'rxjs';
import { TokenResponse } from '../interfaces/token-response';
import { environment } from '../environment';
import { TokenStorageService } from './token-storage.service';
import { EnvService } from '../env.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnDestroy {
  private refreshTokenSubject = new BehaviorSubject<string | null>(null);
  refreshToken$ = this.refreshTokenSubject.asObservable();
  private accessTokenSubject = new BehaviorSubject<string | null>(null);
  accessToken$ = this.accessTokenSubject.asObservable();
  private isRefreshing = false;
  private destroy$ = new Subject<void>();

  constructor(
    private http: HttpClient,
    private tokenStorage: TokenStorageService,
    private envService: EnvService
  ) {
    this.refreshToken$
      .pipe(
        filter((token) => !!token),
        switchMap(() => {
          return this.refreshToken();
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  public isLoggedIn$ = new BehaviorSubject<boolean>(false);

  public updateLoginStatus(isLoggedIn: boolean) {
    this.isLoggedIn$.next(isLoggedIn);
  }

  initLogin(): Observable<TokenResponse> | void {
    const url = this.envService.baseUrl + environment.tokenUrl;

    return this.http.post<TokenResponse>(url, null).pipe(
      tap((response) => {
        this.storeTokens(response.at); // Store tokens
        this.accessTokenSubject.next(response.at);
        this.scheduleTokenRefresh(response.exp); // Schedule refresh
      }),
      catchError((error) => {
        // Handle refresh token errors (e.g., log out the user)
        return throwError(() => new Error(error.message));
      })
    );
  }

  scheduleTokenRefresh(expiresIn: number) {
    const timeUntilRefresh = expiresIn * 1000 * 0.8;

    setTimeout(() => {
      this.refreshToken().subscribe();
    }, timeUntilRefresh);
  }

  private refreshToken() {
    const url = this.envService.baseUrl + environment.tokenUrl;

    return this.http.post<TokenResponse>(url, null).pipe(
      tap((response) => {
        this.storeTokens(response.at);
        this.accessTokenSubject.next(response.at);
        this.scheduleTokenRefresh(response.exp);
      }),
      finalize(() => {
        this.isRefreshing = false;
      }),
      catchError((error) => {
        // Handle refresh token errors (e.g., log out the user)
        return throwError(() => new Error(error.message));
      })
    );
  }

  private storeTokens(accessToken: string) {
    // localStorage.setItem('access_token', accessToken);
    this.tokenStorage.setToken(accessToken);
  }

  getAccessToken(): string | null {
    // return localStorage.getItem('access_token');
    return this.tokenStorage.getToken();
  }

  getRefreshToken(): string | null {
    // return localStorage.getItem('refresh_token');
    return this.tokenStorage.getRefreshToken();
  }

  // ... (Your Get/Store Token Logic)
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
