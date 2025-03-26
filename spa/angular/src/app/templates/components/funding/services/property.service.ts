import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor() { }

  public getClientId():string {
    return sessionStorage.getItem('web_auth_client_id') || '';
  }

  public getClientSecret(): string {
    return sessionStorage.getItem('web_auth_client_secret') || '';
  }


}
