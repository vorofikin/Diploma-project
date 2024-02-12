import { Parameters, TParameter } from './parameters';
import { IValidationResult } from './validation.model';

export interface Parameter {
  title: Parameters;
  value: TParameter;
}

export interface IMonitoring extends Parameter, IValidationResult {}
