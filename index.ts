import express from "express";
import { calculateBmi } from "./bmiCalculator";

const app = express();

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  const params = req.query;
  const errorMessage = { error: 'malformatted parameters' };
  // check that the parameters exist
  if (!(params.height && params.weight)) {
    res.send(errorMessage);
  }
  const data = [ Number(params.height), Number(params.weight) ];
  // check that both are positive numbers
  if (data.includes(NaN) || data.map(n => n < 0).includes(true)) {
    res.send(errorMessage);
  }
  // calculate and return the bmi'
  res.send({ weight: data[1], height: data[0], bmi: calculateBmi(data[0], data[1]) });
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});