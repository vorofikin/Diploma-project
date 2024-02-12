import { Parameters } from './parameters.model';

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

export default expectedValue;

export interface INormalValue {
  minValue: number;
  maxValue: number;
}