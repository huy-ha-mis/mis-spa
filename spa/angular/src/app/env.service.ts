import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EnvService {
  public withdrawalNote = '';
  public uen = '';
  public entity = '';
  public baseUrl = '';
  public isPreprod = '';
  constructor() {}
}
