export const parseArguments = (args: Array<string>): [number, Array<number>] => {
  // Verify the number of arguments
  if (args.length < 3) throw new Error('Not enough arguments.');
  if (args.length < 4) throw new Error('No training data provided.');

  // Verify that the target is a positive number
  let target: number;
  if (isNaN(Number(args[2]))) {
    throw new Error('Exercise target was not a number.');
  } else if (Number(args[2]) < 0) {
    throw new Error('Target must be positive');
  } else {
    target = Number(args[2]);
  }

  // Verify that the exercise data is positive numbers
  const asNumbers = args.slice(3).map(n => Number(n));
  if (asNumbers.includes(NaN)) {
    throw new Error('All training data must be provided as numbers.');
  } else if (asNumbers.map(n => n < 0).includes(true)) {
    throw new Error('All data must be positive');
  }
  return [target, asNumbers];
}

export default 'utility function'