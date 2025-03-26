import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {
  MatStepper,
  MatStepperModule,
  StepperOrientation,
} from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { Currency } from '../interfaces/currency';
import { TradingAccount } from '../interfaces/trading-account';
import { PaymentUtilitiesService } from '../services/payment-utilities.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ErrorMatcher } from './error-matcher';
import {
  finalize,
  from,
  map,
  merge,
  mergeMap,
  Observable,
  Subject,
  switchMap,
  takeUntil,
  tap,
} from 'rxjs';
import { WithdrawalService } from '../services/withdrawal.service';
import { Withdrawal } from '../interfaces/withdrawal';
import { EnvService } from '../env.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BreakpointObserver } from '@angular/cdk/layout';
import { environment } from '../environment';

type FormGroupError = {
  amount?: string;
};

type ValueLabel = {
  value: number | string;
  label: string;
};

type Balance = {
  poolCode: string;
  amount: number;
  ccyCode?: string;
  subs8Amount: number;
};

@Component({
  selector: 'app-withdrawal',
  standalone: true,
  imports: [
    MatCardModule,
    MatStepperModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatListModule,
    CommonModule,
    MatProgressSpinnerModule,
    AsyncPipe,
  ],
  templateUrl: './withdrawal.component.html',
  styleUrl: './withdrawal.component.scss',
})
export class WithdrawalComponent implements OnInit, OnDestroy {
  @ViewChild(MatStepper) stepper: MatStepper | undefined;
  @Input() tradingAccountsList!: TradingAccount[];
  @Input() beneficiaryAccountList!: TradingAccount[];
  @Input() currencyList!: Currency[];
  @Input() nric!: string;
  @Input() internalUserId!: string;
  transferModeList!: string[];
  errorMatcher!: ErrorMatcher;
  private destroy$ = new Subject<void>();
  withdrawalForm: FormGroup;
  disableSubmit = false;
  tickImage = '';
  availAccPoolList: Balance[] = [];
  subs8AcctBalance = '';
  accounts: TradingAccount[] = [];
  currencies: Currency[] = [];
  availAmount: string = '';
  tbc: string = '01-01-2024 00:00:00';
  srcAccountList: ValueLabel[] = [];
  isLoading = false;
  isLoadingSrcAcct = false;
  stepperOrientation: Observable<StepperOrientation>;

  constructor(
    private fb: FormBuilder,
    private withdrawalService: WithdrawalService,
    private paymentService: PaymentUtilitiesService,
    private envService: EnvService,
    breakpointObserver: BreakpointObserver
  ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
    this.tickImage = envService.baseUrl + '/assets/images/good-sir-tick.png';
    this.errorMatcher = new ErrorMatcher();
    this.withdrawalForm = this.fb.group({
      srcAccount: ['', Validators.required],
      availAccPool: ['', Validators.required],
      dstAccount: [''],
      currency: ['', Validators.required],
      transferMode: ['', Validators.required],
      trfAmount: new FormControl({ value: null, disabled: true }, [
        Validators.required,
        Validators.pattern(/^[1-9]\d*(?:[.]\d+)?$/),
        // Validators.pattern(/^[1-9]\d*$/),
      ]),
    });
    this.loadTransferModeList();
    this.withdrawalForm.addValidators(this.formGroupValidator());
  }

  ngOnInit(): void {
    this.withdrawalForm.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        if (this.isElligibleToKeyInTrfAmount()) {
          this.trfAmount.enable({ emitEvent: false });
        }
      });

    if (environment.activeEnv === 'demo') {
      this.srcAccountList = [
        { value: '0430725', label: '0430725 - 1,902,193.27 SGD' },
        { value: '0430535', label: '0430535 - 1,902,193.27 SGD' },
        { value: '0430447', label: '0430447 - 1,902,193.27 SGD' },
        { value: '0430452', label: '0430452 - 0 SGD' },
      ];
    } else {
      this.currency.valueChanges
        .pipe(
          takeUntil(this.destroy$),
          tap(() => {
            this.isLoadingSrcAcct = true;
            this.availAmount = '';
            this.srcAccountList = [];
            this.availAccPoolList = [];
            this.beneficiaryAccountList = [];
            this.availAccPool.setValue('');
            this.dstAccount.setValue({ tradingAccountNumber: '' });
            this.srcAccount.setValue('', { emitEvent: false });
          }),
          switchMap((value) =>
            this.paymentService
              .getTradingAccountsList(
                this.nric,
                this.internalUserId,
                value?.currencyCode
              )
              .pipe(
                switchMap((value) => from(value.Account)),
                mergeMap((tradingAccount) =>
                  this.paymentService
                    .getCurrencyBlanace(
                      tradingAccount.tradingAccountNumber,
                      this.currency.value?.currencyCode
                    )
                    .pipe(
                      map((value) => {
                        let totalSubs8Amount = 0;

                        if (value.Balance.length > 0) {
                          totalSubs8Amount = value.Balance[0].totalSubs8Amount;
                        }

                        const label =
                          tradingAccount.tradingAccountNumber +
                          ' - ' +
                          totalSubs8Amount.toLocaleString('en-US') +
                          ' ' +
                          this.currency.value?.currencyCode;
                        return {
                          value: tradingAccount.tradingAccountNumber,
                          label: label,
                        };
                      }),
                      finalize(() => {
                        this.isLoadingSrcAcct = false;
                      })
                    )
                )
              )
          )
        )
        .subscribe((value) => {
          this.srcAccountList.push(value);
          console.log(JSON.stringify(this.srcAccountList));
        });
    }

    if (environment.activeEnv === 'demo') {
      this.availAmount = '4434029.97';
      this.availAccPoolList = [
        {
          amount: 4434029.97,
          poolCode: 'CA',
          subs8Amount: 44.5,
          ccyCode: 'SGD',
        },
      ];

      this.subs8AcctBalance = ' - 1,902,193.27 SGD';
      this.beneficiaryAccountList = [
        {
          accountName: 'ELIZABERTH PIERCE',
          tradingAccountNumber: '0430447',
          ttBeneBank: 'ABC',
          ttBeneBankAcNm: '',
          ttBeneBankAcNo: '1013466128',
          ttBeneBankCtry: 'SG',
          ttSwiftRef: '',
          typeOfAccount: '',
        },
      ];
    } else {
      this.srcAccount.valueChanges
        .pipe(
          takeUntil(this.destroy$),
          tap(() => {
            this.isLoading = true;
            this.availAccPool.setValue('');
            this.dstAccount.setValue({ tradingAccountNumber: '' });
            this.availAccPoolList = [];
            this.beneficiaryAccountList = [];
          }),
          mergeMap((srcAccountValue) => {
            return merge(
              this.paymentService
                .getCurrencyBlanace(
                  srcAccountValue,
                  this.currency.value.currencyCode
                )
                .pipe(
                  tap((value) => {
                    const ccyCode = this.currency.value?.currencyCode;
                    let balance: Balance = {
                      amount: 0,
                      poolCode: 'CA',
                      subs8Amount: 0,
                    };
                    let totalSubs8Amount = 0;
                    if (value.Balance.length > 0) {
                      balance = value.Balance[0].Balances.find(
                        (b) => b.poolCode === 'CA'
                      ) ?? { poolCode: '', amount: 0, subs8Amount: 0 };
                      totalSubs8Amount = value.Balance[0].totalSubs8Amount;
                    }

                    this.availAmount = balance?.amount.toString();
                    balance.ccyCode = ccyCode;
                    this.availAccPoolList = [balance];

                    this.subs8AcctBalance =
                      ' - ' +
                      totalSubs8Amount.toLocaleString('en-US') +
                      ' ' +
                      ccyCode;
                  }),
                  takeUntil(this.destroy$),
                  finalize(() => {
                    this.isLoading = false;
                  })
                ),
              this.paymentService
                .getBeneficiaryAccountList(
                  srcAccountValue,
                  this.currency.value.currencyCode,
                  this.internalUserId
                )
                .pipe(
                  tap((value) => {
                    this.beneficiaryAccountList = value.Account;
                  }),
                  takeUntil(this.destroy$)
                )
            );
          })
        )
        .subscribe();
    }
  }

  isElligibleToKeyInTrfAmount() {
    return (
      this.srcAccount.value &&
      this.dstAccount.value &&
      this.currency.value &&
      this.transferMode.value
    );
  }

  private formGroupValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const formGroupError: FormGroupError = {};
      const transferMode = control.get('transferMode')?.value;
      // const currency = (control.get('currency')?.value as Currency)
      //   .currencyCode;
      const currency = this.currencyValue.currencyCode;
      const trfAmount = control.get('trfAmount')?.value;
      const availAmount = Number(this.availAmount);

      switch (transferMode) {
        case 'FAST':
          if (currency !== 'SGD' || trfAmount >= 200000) {
            formGroupError.amount =
              'Please use SGD currency and ensure the amount is less than 200,000.';
          } else if (currency === 'SGD' && trfAmount > availAmount) {
            formGroupError.amount =
              'Please ensure that you have enough balance';
          }
          break;
        case 'MEPS':
          if (currency !== 'SGD' || trfAmount < 200000) {
            formGroupError.amount =
              'Please use SGD currency and ensure the amount is at least 200,000.';
          } else if (currency === 'SGD' && trfAmount > availAmount) {
            formGroupError.amount =
              'Please ensure that you have enough balance';
          }
          break;
        case 'TT':
          if (currency === 'SGD') {
            formGroupError.amount = 'Please do not use SGD for this transfer.';
          } else if (trfAmount > availAmount) {
            formGroupError.amount =
              'Please ensure that you have enough balance';
          }
          break;
        default:
          return null;
      }

      console.log(Object.keys(formGroupError).length);

      if (Object.keys(formGroupError).length == 0) {
        return null;
      }

      return formGroupError;
    };
  }

  private loadTransferModeList() {
    this.transferModeList = ['FAST', 'MEPS', 'TT'];
  }

  private onSourceAccountChanged() {
    this.paymentService
      .getCurrencyBlanace(
        this.srcAccount.value,
        this.currency.value.currencyCode
      )
      .subscribe({
        next: (data) => {
          const ccyCode = this.currency.value.currencyCode;
          let balance: Balance = { amount: 0, poolCode: 'CA', subs8Amount: 0 };
          let totalSubs8Amount = 0;
          if (data.Balance.length > 0) {
            balance = data.Balance[0].Balances.find(
              (b) => b.poolCode === 'CA'
            ) ?? { poolCode: '', amount: 0, subs8Amount: 0 };
            totalSubs8Amount = data.Balance[0].totalSubs8Amount;
          }
          this.availAmount = balance?.amount.toString();
          balance.ccyCode = ccyCode;
          this.availAccPoolList = [balance];

          this.subs8AcctBalance =
            ' - ' + totalSubs8Amount.toLocaleString('en-US') + ' ' + ccyCode;
        },
      });
    this.loadBeneficiaryAccount(
      this.currency.value.currencyCode,
      this.srcAccount.value
    );
  }

  getSubs8Amount(onTheList: string) {
    if (onTheList === this.srcAccount.value) {
      return this.subs8AcctBalance;
    } else {
      return '';
    }
  }

  get srcAccount(): FormControl<string> {
    return this.withdrawalForm.get('srcAccount') as FormControl;
  }

  get dstAccount(): FormControl<TradingAccount> {
    return this.withdrawalForm.get('dstAccount') as FormControl;
  }

  get currency(): FormControl<Currency> {
    return this.withdrawalForm.get('currency') as FormControl;
  }

  get transferMode(): FormControl<string> {
    return this.withdrawalForm.get('transferMode') as FormControl;
  }

  get trfAmount(): FormControl<number> {
    return this.withdrawalForm.get('trfAmount') as FormControl;
  }

  get availAccPool(): FormControl<string> {
    return this.withdrawalForm.get('availAccPool') as FormControl;
  }

  get currencyValue(): Currency {
    if (this.currency.value) {
      return this.currency.value;
    } else {
      return {
        currencyCode: '',
        currencyDescription: '',
        bankAccountNo: '',
        bankCode: '',
        bankName: '',
        swiftCode: '',
      };
    }
  }

  submitAndNext() {
    this.disableSubmit = true;
    const body: Withdrawal = {
      amount: this.trfAmount.value,
      tradingAccountNo: this.srcAccount.value,
      bankAccountNm: this.dstAccount.value.ttBeneBankAcNm ?? '',
      bankAccountNo: this.dstAccount.value.ttBeneBankAcNo ?? '',
      swiftCode: this.dstAccount.value.ttBeneSwiftRef ?? '',
      ccyCode: this.currency.value.currencyCode,
      transferMode: this.transferMode.value,
      withdrawalAccountBalance: parseFloat(this.availAmount),
      poolCode: this.availAccPool.value,
    };

    if (environment.activeEnv === 'demo') {
      this.stepper?.next();
      this.disableSubmit = false;
    } else {
      this.withdrawalService.postWithdrawal(body).subscribe({
        next: (response) => {
          if (response.statusCode === '00') {
            this.stepper?.next();
          }

          this.disableSubmit = false;
        },
        error: () => {
          this.disableSubmit = false;
        },
      });
    }
  }

  reset() {
    this.stepper?.reset();
    this.trfAmount.disable({ emitEvent: false });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  notEnoughBalance(): boolean {
    return this.trfAmount.value > Number(this.availAmount);
  }

  private loadTradingAccount(currencyCode: string) {
    this.paymentService
      .getTradingAccountsList(this.nric, this.internalUserId, currencyCode)
      .subscribe({
        next: (data) => {
          this.tradingAccountsList = data.Account;
        },
      });
  }

  private loadBeneficiaryAccount(
    currencyCode: string,
    tradingAccountNumber: string
  ) {
    this.paymentService
      .getBeneficiaryAccountList(
        tradingAccountNumber,
        currencyCode,
        this.internalUserId
      )
      .subscribe({
        next: (data) => {
          this.beneficiaryAccountList = data.Account;
        },
      });
  }

  getWithdrawalNote(): string {
    return this.envService.withdrawalNote;
  }
}
