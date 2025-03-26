import { Component, Input, OnInit, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { BaseComponent } from '../base/base.component';
import { MatDialog } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { MatList, MatListItem, MatListModule } from '@angular/material/list';
import { TradingAccount } from '../interfaces/trading-account';
import { PaymentUtilitiesService } from '../services/payment-utilities.service';
import { Currency } from '../interfaces/currency';
import { environment } from '../environment';

type AccountList = { accountCode: string; accountDescription: string }[];
type CurrencyList = { currencyCode: string; currencyDescription: string }[];
type DataModel = {
  accountList: AccountList;
  disclaimer: string;
  currencyList: CurrencyList;
};

@Component({
  selector: 'app-deposit-bank-transfer',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    FormsModule,
    MatIcon,
    MatListModule,
  ],
  templateUrl: './deposit-bank-transfer.component.html',
  styleUrl: './deposit-bank-transfer.component.scss',
})
export class DepositBankTransferComponent
  extends BaseComponent
  implements OnInit
{
  @Input() tradingAccountsList!: TradingAccount[];
  @Input() nric!: string;
  @Input() internalUserId!: string;
  dataModel: DataModel = {
    accountList: [],
    currencyList: [],
    disclaimer: '',
  };

  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    company: null,
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    address: [null, Validators.required],
    address2: null,
    city: [null, Validators.required],
    state: [null, Validators.required],
    currency: [null, Validators.required],
    uen: [null, Validators.required],
    entity: [null, Validators.required],
    reference: [null, Validators.required],
    account: [null, Validators.required],
    bankName: [null, Validators.required],
    postalCode: [
      null,
      Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(5),
      ]),
    ],
    shipping: ['free', Validators.required],
  });

  hasUnitNumber = false;
  accounts: string[] = [];
  account!: TradingAccount;
  currencies: Currency[] = [];
  currencyList: Currency[] = [];
  currency: string = '';
  selectedCurrency!: Currency;
  bankName: string = '';
  bankSwiftCode: string = '';
  accountName: string = '';
  accountNumber: string = '';
  commentReference: string = '';

  constructor(
    override dialog: MatDialog,
    private paymentUtils: PaymentUtilitiesService
  ) {
    super(dialog);
  }
  ngOnInit(): void {
    if (environment.activeEnv === 'demo') {
      this.currencyList = [
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
    } else {
      this.loadPermittedCurrencies();
    }
  }

  override updateData(data: DataModel): void {
    this.dataModel = data;
  }

  onSelectedCurrencyChanged() {
    this.bankName = this.selectedCurrency.bankName;
    this.bankSwiftCode = this.selectedCurrency.swiftCode;
    this.accountName = this.selectedCurrency.bankCode;
    this.accountNumber = this.selectedCurrency.bankAccountNo;
    if (environment.activeEnv === 'demo') {
      this.tradingAccountsList = [
        { tradingAccountNumber: '0430447' },
        { tradingAccountNumber: '0430452' },
        { tradingAccountNumber: '0430535' },
        { tradingAccountNumber: '0430725' },
      ];
    } else {
      this.loadTradingAccount(this.selectedCurrency.currencyCode);
    }
  }

  private loadTradingAccount(currencyCode: string) {
    this.paymentUtils
      .getTradingAccountsList(this.nric, this.internalUserId, currencyCode)
      .subscribe({
        next: (data) => {
          this.tradingAccountsList = data.Account;
        },
      });
  }

  onSelectedAccountChanged() {
    console.log('ON CHANGED ' + JSON.stringify(this.account));
    this.commentReference = this.account.tradingAccountNumber ?? '';
  }

  private loadPermittedCurrencies() {
    this.paymentUtils.getPermittedCurrencies().subscribe({
      next: (data) => {
        this.currencyList = data.currencyList;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  copyText(text: string) {
    navigator.clipboard.writeText(text);
  }
}
