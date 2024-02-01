export enum Parameters {
  ConvertedGasPressure = 'ConvertedGasPressure',
  ConvertedGasTemperature = 'ConvertedGasTemperature',
  CoarselyRegeneratedSolutionTemperature = 'CoarselyRegeneratedSolutionTemperature',
  DeeplyRegeneratedSolution = 'DeeplyRegeneratedSolution',
  VaporGasMixtureTemperature = 'VaporGasMixtureTemperature',
  VaporGasMixturePressure = 'VaporGasMixturePressure',
  FirstBranchSaturatedSolutionTemp = 'FirstBranchSaturatedSolutionTemp',
  SecondBranchSaturatedSolutionTemp = 'SecondBranchSaturatedSolutionTemp',
  ThirdBranchSaturatedSolutionTemp = 'ThirdBranchSaturatedSolutionTemp',
}

export type TParameter = number | undefined;
