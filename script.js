// Instatiate empty lists
let list_of_fun_possibilities = [];
let list_of_bbq_possibilities = [];
let list_of_solutions = [];

const findListOfFunPossibilities = () => {
  /*
    Function finds possible values to replace FUN, values should meet criteria below:
    1. 3 digit value
    2. Has no repeated digits
  */
  for (let i = 100; i < 1000; i++) {
    if (!(/([0-9]).*?\1/).test(i)) list_of_fun_possibilities.push(i);
  }
  return list_of_fun_possibilities;
}

const findListOfBbqPossibilities = () => {
  /*
    Function finds possible values to replace BBQ, values should meet criteria below:
    1. 3 digit value
    2. First two digits are similar
  */
  for (let i = 100; i < 1000; i++) {
    const digits = i.toString().split('').map(Number);
    if (digits[0] === digits[1] && digits[1] !== digits[2]) list_of_bbq_possibilities.push(i);
  }
  return list_of_bbq_possibilities;
}

const checkIfSolutionConformsToPattern = (solution, funValue) => {
  /*
    Function ensures that the final solution conforms to the rules below:
    1. 6 digit value
    2. The third and the fourth digit are similar
    3. No other digits are similar
    4. Second digit is similar to the second digit of the FUN value
  */
  let solution_digits = solution.toString().split('').map(Number);
  let fun_digits = funValue.toString().split('').map(Number);
  return (
    !list_of_solutions.includes(solution)
    && solution_digits.length === 6
    && solution_digits[1] === fun_digits[1]
    && solution_digits[2] === solution_digits[3]
    && solution_digits[0] !== solution_digits[1]
    && solution_digits[0] !== solution_digits[2]
    && solution_digits[0] !== solution_digits[4]
    && solution_digits[0] !== solution_digits[5]
    && solution_digits[1] !== solution_digits[2]
    && solution_digits[1] !== solution_digits[4]
    && solution_digits[1] !== solution_digits[5]
    && solution_digits[2] !== solution_digits[4]
    && solution_digits[2] !== solution_digits[5]
    && solution_digits[4] !== solution_digits[5]
  )
}

const CalculatePossibleSolutions = () => {
  /*
    Funtion calculates and outputs the accepted values
  */
  let funValueList = findListOfFunPossibilities();
  let bbgValueList = findListOfBbqPossibilities();
  funValueList.forEach(funValue => {
    bbgValueList.forEach(bbgValue => {
      let solution = funValue * bbgValue;
      if (checkIfSolutionConformsToPattern(solution, funValue)) {
        console.log(`
          ${funValue}
      X   ${bbgValue}
      -------------
        ${solution}
      `);
      list_of_solutions.push(solution);
      };
    });
  });

  console.log(`There are ${list_of_solutions.length} unique solutions`);
}

// Entry point to the script
CalculatePossibleSolutions();

module.exports = CalculatePossibleSolutions;
