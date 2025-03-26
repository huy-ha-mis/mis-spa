import { Injectable } from '@angular/core';
import { CryptoService } from './crypto.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private readonly ACCESS_TOKEN_KEY = 'access_token';
  private readonly REFRESH_TOKEN_KEY = 'refresh_token';

  constructor(private cryptoService:CryptoService){}

  setToken(access: string, refresh: string): void {
    sessionStorage.setItem(this.ACCESS_TOKEN_KEY, this.cryptoService.encrypt(access)); 
    sessionStorage.setItem(this.REFRESH_TOKEN_KEY, this.cryptoService.encrypt(refresh));
  }

  getAccessToken(): string | null {
    return this.cryptoService.decrypt(sessionStorage.getItem(this.ACCESS_TOKEN_KEY));
  }

  getRefreshToken(): string | null {
    return this.cryptoService.decrypt(sessionStorage.getItem(this.REFRESH_TOKEN_KEY));
  }

  clearTokens(): void {
    sessionStorage.removeItem(this.ACCESS_TOKEN_KEY);
    sessionStorage.removeItem(this.REFRESH_TOKEN_KEY);
  }
}
