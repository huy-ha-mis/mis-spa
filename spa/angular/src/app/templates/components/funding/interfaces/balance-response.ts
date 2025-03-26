import { ServiceResponse } from './service-response';

export interface BalanceResponse extends ServiceResponse {
  Balance: [
    {
      ccyCode: string;
      totalSubs8Amount: number;
      Balances: [
        {
          poolCode: string;
          amount: number;
          subs8Amount: number;
        }
      ];
    }
  ];
}
