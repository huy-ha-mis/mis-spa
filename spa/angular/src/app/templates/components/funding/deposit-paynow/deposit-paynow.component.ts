import {
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormsModule,
} from '@angular/forms';
import { MatInputModule, MatSuffix } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { AppService } from '../services/app.service';
//import { HttpParams } from '@angular/common/http';
import { BaseComponent } from '../base/base.component';
import { MatDialog } from '@angular/material/dialog';
import { QRCodeElementType, QRCodeModule } from 'angularx-qrcode';
import { QrDownloadableComponent } from '../qr-downloadable/qr-downloadable.component';
import { environment } from '../environment';
import { MatIcon } from '@angular/material/icon';
import { PaymentUtilitiesService } from '../services/payment-utilities.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TradingAccount } from '../interfaces/trading-account';
import { EnvService } from '../env.service';
type AccountList = { accountCode: string; accountDescription: string }[];
type DataModel = {
  accountList: AccountList;
  disclaimer: string;
  qrData: string;
};
// type PostData = {
//   account?: string | null;
//   uniqueEntityNumber?: string | null;
//   entity?: string | null;
//   reference?: string | null;
// };

@Component({
  selector: 'app-deposit-paynow',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    QRCodeModule,
    QrDownloadableComponent,
    MatIcon,
    MatSuffix,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './deposit-paynow.component.html',
  styleUrl: './deposit-paynow.component.scss',
})
export class DepositPaynowComponent extends BaseComponent implements OnInit {
  imageDataUrl!: SafeUrl;
  @Input() tradingAccountsList!: TradingAccount[];
  tradingAccount!: TradingAccount;
  uniqueEntityNumber!: string;
  entity!: string;
  reference!: string;
  public elementType: QRCodeElementType = null!;
  public imageSrc = undefined;

  qrImage = '';

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
    // entity: [null, Validators.required],
    reference: [null, Validators.required],
    account: [null, Validators.required],
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

  dataModel: DataModel = {
    accountList: [],
    qrData: '',
    disclaimer: '',
  };

  accounts: string[] = [];
  tradingAccountNo = '';

  // disclaimer1 =
  //   'Use your legal name as your PayLah or PayNow nickname to avoid any extra verification steps.';
  // disclaimer2 =
  //   'We currently do not accept transfers from third parties (e.g. Wise, Revolut, Google Pay or GrabPay).';

  // @ViewChild('inputUEN') inputUEN: MatInput | null = null;
  @ViewChild('inputUEN') inputUEN: ElementRef | undefined;

  // copyText(text?: string) {
  //   let textToCopy = text;
  //   if (!textToCopy && this.inputElement) {
  //     textToCopy = this.inputElement.nativeElement.value;
  //   }
  //   // ... rest of the logic from the JavaScript example above
  // }

  constructor(
    private appService: AppService,
    private sanitizer: DomSanitizer,
    private paymentUtils: PaymentUtilitiesService,
    override dialog: MatDialog,
    private route: ActivatedRoute,
    private envService: EnvService
  ) {
    super(dialog);
  }

  ngOnInit(): void {
    console.log('onInit');
    // const nric = this.route.snapshot.queryParamMap.get('PEOPLE_ID') ?? '';
    // this.loadTradingAccountsList(nric);
    // this.paynow
    //   .getAccounts()
    //   .subscribe((response) => (this.accounts = response));

    // this.paynow
    //   .getPayNowQR()
    //   .subscribe((response) => (this.qrImage = response.image));
  }

  onTradingAccountChange() {
    if (environment.activeEnv === 'demo') {
      const imagePath = `assets/images/paynow-qr.png`;
      this.imageDataUrl = this.sanitizer.bypassSecurityTrustUrl(imagePath);
    } else {
      this.loadPayNowQrCode(this.tradingAccount.tradingAccountNumber);
    }
    this.uniqueEntityNumber =
      this.tradingAccount.uniqueEntityNumber ?? this.envService.uen;
    this.entity = this.tradingAccount.entity ?? this.envService.entity;
    this.reference = this.tradingAccount.tradingAccountNumber;
  }

  // private onSubmit(): void {
  //   const formData = this.addressForm.value;
  //   const data: PostData = {
  //     account: formData.account,
  //     uniqueEntityNumber: formData.uen,
  //     reference: formData.reference,
  //   };
  //   this.appService.doPost(this, this.apiUrl + '/paynow', data);
  // }

  override updateData(data: DataModel): void {
    this.dataModel = data;
  }

  downloadImage() {
    // const link = document.createElement('a');
    // link.download = 'my-qr.jpeg';
    // link.href = 'data:image/png;base64,' + this.qrImage;
    // link.click();
    const link = document.createElement('a');
    link.href = this.imageDataUrl
      .toString()
      .replace('SafeValue must use [property]=binding:', '')
      .replace(' (see https://g.co/ng/security#xss)', '');
    link.download = 'qr_code.png'; // Set the desired filename
    link.click();
    link.remove();
  }

  copyText(text?: string) {
    navigator.clipboard.writeText(text ?? '');
  }

  private loadPayNowQrCode(tradingAccountNo: string) {
    this.paymentUtils.getPayNowQrCode(tradingAccountNo).subscribe((data) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        this.imageDataUrl = this.sanitizer.bypassSecurityTrustUrl(
          reader.result as string
        );
      };
      reader.readAsDataURL(data);
    });
  }
}
