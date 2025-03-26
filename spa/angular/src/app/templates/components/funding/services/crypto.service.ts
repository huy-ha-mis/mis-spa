import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js'

@Injectable({ providedIn: 'root' })
export class CryptoService {
  private readonly secretKey = 'SecurityRiskToPutMeHere';
  
  encrypt(data: string): string {
    if (this.secretKey) {
      return CryptoJS.AES.encrypt(data, this.secretKey).toString();
    }

    return '';
  }

  decrypt(ciphertext: string|null): string | null {
    if (ciphertext && this.secretKey) {
      const bytes = CryptoJS.AES.decrypt(ciphertext, this.secretKey);
      return bytes.toString(CryptoJS.enc.Utf8);
    }
    
    return null;
  }
}