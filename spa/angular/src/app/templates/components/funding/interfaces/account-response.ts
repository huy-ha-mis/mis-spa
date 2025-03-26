import { ServiceResponse } from './service-response';

export interface AccountResponse extends ServiceResponse {
  Account: {
    tradingAccountNumber: string;
    typeOfAccount: string;
    accountName: string;
    ttBeneBank: string;
    ttBeneBankAcNm: string;
    ttBeneBankAcNo: string;
    ttBeneSwiftRef: string;
  };
}
