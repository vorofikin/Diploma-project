type TResultMessage = (delta: number) => string;

interface IValidationResultMessages {
  ParameterIsHigherThanExpected: TResultMessage;
  ParameterIsLessThanExpected: TResultMessage;
}

export const ValidationResult: IValidationResultMessages = {
  ParameterIsHigherThanExpected: (delta: number) =>
    `Parameter is higher than expected on ${delta}`,
  ParameterIsLessThanExpected: (delta: number) =>
    `Parameter is less than expected on ${delta}`,
};

export interface IValidationResult {
  isOk: boolean;
  normalValue: INormalValue;
  comment?: string;
}

export interface INormalValue {
  minValue: number;
  maxValue: number;
}
