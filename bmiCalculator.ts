import { parseArguments } from "./bmiUtils";

// Calculates the bmi based on the provided parameters (in cm and kg)
const calculateBmi = (height: number, weight: number) => {
  const heightInM: number = height / 100;
  const bmi: number = weight / (heightInM * heightInM);
  let weightStatus = "";
  if (bmi >= 30) {
    weightStatus = 'Obese';
  } else if (bmi >= 25) {
    weightStatus = 'Overweight';
  } else if (bmi >= 18.5) {
    weightStatus = 'Normal (healthy weight)';
  } else {
    weightStatus = 'Underweight';
  }
  console.log(weightStatus)
}

try {
  const [height, weight] = parseArguments(process.argv);
  calculateBmi(height, weight);
} catch (error: unknown) {
  let errorMessage = 'Something went wrong.';
  if (error instanceof Error) {
    errorMessage += ` Error: ${error.message}`
  }
  console.log(errorMessage);
}
