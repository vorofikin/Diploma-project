import { Parameters, TParameter } from './parameters';

export interface Parameter {
  title: Parameters;
  value: TParameter;
}

export type MonitoringModel = Parameter[];

// export interface MonitoringModel {
//   ConvertedGasPressure: number;
//   ConvertedGasTemperature: number;
//   CoarselyRegeneratedSolutionTemperature: number;
//   DeeplyRegeneratedSolution: number;
//   VaporGasMixtureTemperature: number;
//   VaporGasMixturePressure: number;
//   FirstBranchSaturatedSolutionTemp: number;
//   SecondBranchSaturatedSolutionTemp: number;
//   ThirdBranchSaturatedSolutionTemp: number;
// }
