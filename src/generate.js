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

}