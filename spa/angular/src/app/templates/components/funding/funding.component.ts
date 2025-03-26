import { Component, Input, OnInit } from '@angular/core';
import { EditableComponent } from '@magnolia/angular-editor';
import { MgnlContent } from '@magnolia/frontend-helpers-base';
import { SafeHtmlPipe } from '../../../pipes/SafeHtmlPipe.pipe';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { Title } from '@angular/platform-browser';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawalComponent } from './withdrawal/withdrawal.component';
import { PaymentUtilitiesService } from './services/payment-utilities.service';
import { TradingAccount } from './interfaces/trading-account';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Currency } from './interfaces/currency';
import { environment } from './environment';
import { EnvService } from './env.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-funding',
  templateUrl: './funding.component.html',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    DepositComponent,
    WithdrawalComponent,
    CommonModule,
  ],

})

export class FundingComponent implements OnInit {
  tradingAccountsList!: TradingAccount[];
  permittedCurrencyList!: Currency[];
  nric!: string;
  internalUserId!: string;
  pageTitle: string = '';
  showWithdrawal!: boolean;
  constructor(
      private titleService: Title,
      private paymentUtils: PaymentUtilitiesService,
      private route: ActivatedRoute,
      private authService: AuthService,
      private router: Router,
      private envService: EnvService
  ) {}

  ngOnInit(): void {
    console.log('window.location ' + JSON.stringify(window.location));
    this.route.params.subscribe((params) => {
      const icpport = params['ICPPORT'];
      console.log('route.param ' + icpport);
      // ... use the productId to fetch product details or perform other actions
    });
    console.log("environment.activeEnv", environment.activeEnv);
    if (environment.activeEnv === 'dev') {
      this.nric = '123123';
      this.internalUserId = '456456456';
      this.authService.initLogin()?.subscribe({
        next: () => {
          this.loadTradingAccountsList(this.nric);
          this.loadPermittedCurrencyList();
          this.setShowWithdrawal();
        },
      });
    } else if (environment.activeEnv === 'prod') {
      window.addEventListener('message', (event) => {
        if (event.data.type === 'initData') {
          console.log('Received data from parent:', event.data.data);
          this.nric = event.data.data.someValue;
          this.internalUserId = event.data.data.peopleId;
          this.authService.initLogin()?.subscribe({
            next: () => {
              this.loadTradingAccountsList(this.nric);
              this.loadPermittedCurrencyList();
              this.setShowWithdrawal();
            },
          });
        }
      });
    } else {
      this.nric = '123123';
      this.internalUserId = '456456456';
      this.tradingAccountsList = [
        { tradingAccountNumber: '0430447' },
        { tradingAccountNumber: '0430452' },
        { tradingAccountNumber: '0430535' },
        { tradingAccountNumber: '0430725' },
      ];
      this.permittedCurrencyList = [
        {
          currencyCode: 'SGD',
          currencyDescription: 'Singapore Dollar',
          bankAccountNo: '123456789',
          bankCode: 'ABC',
          bankName: 'ABC',
          swiftCode: 'ABC',
        },
        {
          currencyCode: 'USD',
          currencyDescription: 'US Dollar',
          bankAccountNo: '123456789',
          bankCode: 'ABC',
          bankName: 'ABC',
          swiftCode: 'ABC',
        },
      ];
      this.showWithdrawal = true;
    }
    this.pageTitle = this.titleService.getTitle();
  }

  private loadTradingAccountsList(nric: string) {
    this.paymentUtils
        .getTradingAccountsList(nric, this.internalUserId)
        .subscribe({
          next: (data) => {
            this.tradingAccountsList = data.Account;
          },
        });
  }

  private loadPermittedCurrencyList() {
    this.paymentUtils.getPermittedCurrencies().subscribe({
      next: (data) => {
        this.permittedCurrencyList = data.currencyList;
      },
    });
  }

  private setShowWithdrawal() {
    if (this.envService.isPreprod === 'true') {
      const peopleId = decodeURIComponent(this.internalUserId);
      this.paymentUtils.validateWithdrawalUser(peopleId).subscribe({
        next: (data) => {
          this.showWithdrawal = data.isAllowed;
        },
        error: () => {
          this.showWithdrawal = false;
        },
      });
    } else {
      this.showWithdrawal = true;
    }
  }
}
