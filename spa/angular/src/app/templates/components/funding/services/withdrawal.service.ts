import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from '../environment';
import { Withdrawal } from '../interfaces/withdrawal';
import { ServiceResponse } from '../interfaces/service-response';
import { Observable } from 'rxjs';
import { EnvService } from '../env.service';

@Injectable({
  providedIn: 'root',
})
export class WithdrawalService {
  constructor(private http: HttpClient, private envService: EnvService) {}

  postWithdrawal(withdrawal: Withdrawal): Observable<ServiceResponse> {
    const url = this.envService.baseUrl + env.withdrawal;
    return this.http.post<ServiceResponse>(url, withdrawal);
  }
}
