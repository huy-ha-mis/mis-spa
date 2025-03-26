import { Component, Input } from '@angular/core';
import { DepositPaynowComponent } from '../deposit-paynow/deposit-paynow.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { DepositBankTransferComponent } from '../deposit-bank-transfer/deposit-bank-transfer.component';
import { TradingAccount } from '../interfaces/trading-account';

@Component({
  selector: 'app-deposit-one-time',
  standalone: true,
  imports: [
    DepositPaynowComponent,
    DepositBankTransferComponent,
    MatButtonToggleModule,
  ],
  templateUrl: './deposit.component.html',
  styleUrl: './deposit.component.scss',
})
export class DepositComponent {
  @Input() tradingAccountsList!: TradingAccount[];
  @Input() nric!: string;
  @Input() internalUserId!: string;
  selectedDeposit = 0;
  disclaimer1 =
    'Please transfer funds from a bank account in the same name as your  trading account to avoid deposits rejection.';
  disclaimer2 =
    'We currently do not accept transfers from third parties (e.g. Wise, Revolut, Google Pay or GrabPay).';
  disclaimerPayNow =
    'To generate the PayNow QR Code for your Trading Account, select an account number from the dropdown list below.';
  disclaimerBankTransfer =
    'To view the bank transfer details, first select the currency from the Currency dropdown list, then select an account number from the Trading Account number list.';
  disclaimer3 = this.disclaimerPayNow;

  selectDeposit(index: number) {
    this.selectedDeposit = index;
    if (index === 0) {
      this.disclaimer3 = this.disclaimerPayNow;
    } else {
      this.disclaimer3 = this.disclaimerBankTransfer;
    }
  }
}
