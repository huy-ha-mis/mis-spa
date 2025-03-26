export interface PaynowQR {
  image: string;
}

export interface PayNow {
  image?: string;
  account?: string[];
  uen?: string;
  entity?: string;
  reference?: string;
}

export interface BankTransfer {
  bankName: string;
  bankSwiftCode: string;
  accountName: string;
  accountNumber: string;
  commentReference: string;
}

export interface AvailableAmount {
  availableAmount: string;
}
