import { Injectable } from '@angular/core';
import { AccountResponse } from '../interfaces/account-response';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../environment';
import { CurrenciesResponse } from '../interfaces/currencies-response';
import { BalanceResponse } from '../interfaces/balance-response';
import { DomSanitizer } from '@angular/platform-browser';
import { AccountsListResponse } from '../interfaces/accounts-list-response';
import { EnvService } from '../env.service';
import { ValidationResponse } from '../interfaces/validation-response';

type ReqParam = {
  nric?: string;
  internalUserId?: string;
  mode: string;
  currencyCode?: string;
  tradingAccountNo?: string;
};

@Injectable({
  providedIn: 'root',
})
export class PaymentUtilitiesService {
  constructor(
    private http: HttpClient,
    private sanitizer: DomSanitizer,
    private envService: EnvService
  ) {}

  public getTradingAccountsList(
    nric: string,
    internalUserId: string,
    currencyCode?: string
  ): Observable<AccountsListResponse> {
    const url = this.envService.baseUrl + env.payment.accounts;
    const body: ReqParam = {
      nric: decodeURIComponent(nric),
      mode: 'LIST_TRADING',
      internalUserId: decodeURIComponent(internalUserId),
    };

    if (currencyCode) {
      body.currencyCode = currencyCode;
    }
    return this.http.post<AccountsListResponse>(url, body);
  }

  public getBeneficiaryAccountList(
    tradingAccountNo: string,
    currencyCode: string,
    internalUserId: string
  ): Observable<AccountsListResponse> {
    const url = this.envService.baseUrl + env.payment.accounts;
    const body: ReqParam = {
      tradingAccountNo: tradingAccountNo,
      currencyCode: currencyCode,
      mode: 'LIST_BENEFICIARY',
      internalUserId: decodeURIComponent(internalUserId),
    };

    return this.http.post<AccountsListResponse>(url, body);
  }

  public getPermittedCurrencies(): Observable<CurrenciesResponse> {
    const url = this.envService.baseUrl + env.payment.currencies;
    return this.http.get<CurrenciesResponse>(url);
  }

  public getCurrencyBlanace(
    tradingAccountNo: string,
    ccyCode: string
  ): Observable<BalanceResponse> {
    const url = this.envService.baseUrl + env.payment.balance;
    return this.http.post<BalanceResponse>(url, {
      tradingAccountNo: tradingAccountNo,
      ccyCode: ccyCode,
    });
  }

  public getPayNowQrCode(tradingAccountNo: string) {
    const url = this.envService.baseUrl + env.payment.qr;
    const body = {
      tradingAccountNumber: tradingAccountNo,
    };
    return this.http.post(url, JSON.stringify(body), {
      responseType: 'blob',
    });
  }

  public validateWithdrawalUser(userId: string) {
    const url = this.envService.baseUrl + env.payment.validation;
    return this.http.post<ValidationResponse>(url, {
      peopleId: userId,
    });
  }
}
