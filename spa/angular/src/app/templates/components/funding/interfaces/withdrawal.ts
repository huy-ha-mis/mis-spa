export interface Withdrawal {
  tradingAccountNo: string;
  ccyCode: string;
  transferMode: string;
  amount: number;
  bankAccountNo: string;
  bankAccountNm: string;
  swiftCode: string;
  withdrawalAccountBalance: number;
  poolCode: string;
}
