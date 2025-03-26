import { ServiceResponse } from './service-response';
import { TradingAccount } from './trading-account';

export interface AccountsListResponse extends ServiceResponse {
  Account: TradingAccount[];
}
