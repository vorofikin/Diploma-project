import { Injectable } from '@nestjs/common';
import {
  INormalValue,
  IValidationResult,
  ValidationResult,
} from '../models/validation.model';
import { Parameter } from '../models/monitoring.model';
import { Parameters } from '../models/parameters';

const expectedValue: Map<Parameters, INormalValue> = new Map();
expectedValue.set(Parameters.SecondBranchSaturatedSolutionTemp, {
  minValue: 90,
  maxValue: 95,
});
expectedValue.set(Parameters.ThirdBranchSaturatedSolutionTemp, {
  minValue: 104,
  maxValue: 107,
});
expectedValue.set(Parameters.DeeplyRegeneratedSolution, {
  minValue: 70,
  maxValue: 70,
});
expectedValue.set(Parameters.VaporGasMixtureTemperature, {
  minValue: 75,
  maxValue: 85,
});
expectedValue.set(Parameters.VaporGasMixturePressure, {
  minValue: 0.17,
  maxValue: 0.17,
});
expectedValue.set(Parameters.ConvertedGasPressure, {
  minValue: 2.8,
  maxValue: 2.8,
});
expectedValue.set(Parameters.ConvertedGasTemperature, {
  minValue: 25,
  maxValue: 40,
});
expectedValue.set(Parameters.FirstBranchSaturatedSolutionTemp, {
  minValue: 15,
  maxValue: 25,
});

abstract class IValidationService {
  abstract validateParameter(parameter: Parameter): IValidationResult;

  abstract getExpectedValue(title: Parameters): INormalValue;
}

@Injectable()
export class ValidationService implements IValidationService {
  validateParameter(parameter: Parameter): IValidationResult {
    const expectedValue = this.getExpectedValue(parameter.title);
    const { minValue, maxValue } = expectedValue;
    const { value } = parameter;
    if (value >= minValue && value <= maxValue) {
      return {
        isOk: true,
        normalValue: expectedValue,
      };
    }
    if (value > maxValue) {
      return {
        isOk: false,
        normalValue: expectedValue,
        comment: ValidationResult.ParameterIsHigherThanExpected(
          Number((value - maxValue).toFixed(3)),
        ),
      };
    }
    return {
      isOk: false,
      normalValue: expectedValue,
      comment: ValidationResult.ParameterIsLessThanExpected(
        Number((minValue - value).toFixed(3)),
      ),
    };
  }

  getExpectedValue(title: Parameters): INormalValue {
    return expectedValue.get(title);
  }
}
