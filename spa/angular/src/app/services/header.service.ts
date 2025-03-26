import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  constructor(private http: HttpClient) {}
 
  getNavHeader(): Observable<any> {
    return this.http.get<any>(environment.pageBase + environment.appBase + '/header'); // Replace with actual API URL
  }
}
