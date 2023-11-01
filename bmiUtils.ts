export const parseArguments = (args: String[]): [number, number] => {
  // verify the number of arguments
  if (args.length > 4) throw new Error('Too many arguments.');
  if (args.length < 4) throw new Error('Not enough arguments.');

  // Verify that the arguments are numbers
  if (isNaN(Number(args[2])) || isNaN(Number(args[3]))) {
    throw new Error('Provided variables must be numbers. ')
  }
  const [height, weight] = [Number(args[2]), Number(args[3])];

  // Verify that the numbers are more than 0
  if (height > 0 && weight > 0) {
    return [height, weight];
  } else {
    throw new Error('Arguments must be positive numbers.');
  }
}

export default 'parsing function'