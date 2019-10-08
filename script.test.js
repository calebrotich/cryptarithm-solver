const CalculatePossibleSolutions = require('./script.js'); 

it('calls the entry function', () => {
  expect(CalculatePossibleSolutions()).toHaveBeenCalled;
});

it('should evaluate possible values for FUN', () => {
  const findListOfFunPossibilities = jest.fn();
  CalculatePossibleSolutions();
  expect(findListOfFunPossibilities).toHaveBeenCalled;
});

it('should evaluate possible values for BBG', () => {
  const findListOfBbqPossibilities = jest.fn();
  CalculatePossibleSolutions();
  expect(findListOfBbqPossibilities).toHaveBeenCalled;
});

it('should check if solution conforms to rules', () => {
  const checkIfSolutionConformsToPattern = jest.fn();
  CalculatePossibleSolutions();
  expect(checkIfSolutionConformsToPattern).toHaveBeenCalled;
});
