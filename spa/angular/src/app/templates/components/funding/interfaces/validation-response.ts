import { ServiceResponse } from './service-response';

export interface ValidationResponse extends ServiceResponse {
  isAllowed: boolean;
}
