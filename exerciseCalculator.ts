interface ExerciseData {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const calculateExercises = (values: Array<number>, target: number): ExerciseData => {
  const dailyAvg = values.reduce((acc, curr) => acc + curr, 0) / values.length;
  const differenceFromGoal = dailyAvg - target
  let rating;
  let description;
  /**
   * Rating system works as follows: 
   * Target is met, and there has been exercise every day: 3p
   * The average is at most 30minutes less than desired: 2p
   * Otherwise: 1p
   */
  if (differenceFromGoal >= 0 && !values.includes(0)) {
    rating = 3;
    description = 'very well done';
  } else if (differenceFromGoal > -0.5) {
    rating = 2;
    description = 'not too bad but could be better';
  } else {
    rating = 1;
    description = 'room for improvement';
  }
  const resultData = {
    periodLength: values.length,
    trainingDays: values.filter(v => v != 0).length,
    success: dailyAvg >= target,
    rating: rating,
    ratingDescription: description,
    target: target,
    average: dailyAvg
  }
  /** 
   * Printing the result wasn't mentioned in the exercise description, but when calling the 
   * function from the command line, you won't see it otherwise.
   * */ 
  console.log(resultData);
  return resultData;
}

calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2)