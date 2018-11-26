import { randomInt, pickArrayRandom } from './helpers';
import * as allOperators from './operators';

export default function(options = {}) {
 const opt = {
  initResult: randomInt(0, 10),
  numberOfMoves: randomInt(3, 5),
  numberOfOperators: randomInt(3, 5),
  operatorRange: [1, 9],
  ...options
 }

 // Converting all operators into an array
 const ops = Object.values(allOperators);

 // Creating a random array of operators
 const operators = Array.from({ length: opt.numberOfOperators }, () => {
  const op = pickArrayRandom(ops);
  return op(randomInt(...opt.operatorRange));
 });

 // Applying above operators to initResult
 const goal = Array.from({ length: opt.numberOfMoves }).reduce(goal => {
  const op = pickArrayRandom(operators);

  return op.func(goal); 
 }, opt.initResult);

 return {
  goal,
  operators,
  currentResult: opt.initResult,
  initResult: opt.initResult,
  moves: opt.numberOfMoves
 }
}