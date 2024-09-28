import { alphabet, randomIntFromInterval } from './create.js';

const chooseRandom = (arr, num = 1) => {
  const res = [];
  for (let i = 0; i < num; ) {
    const random = Math.floor(Math.random() * arr.length);
    if (res.indexOf(arr[random]) !== -1) {
      continue;
    }
    res.push(arr[random]);
    i++;
  }
  return res;
};

export const randomLayers = chooseRandom(
  alphabet,
  randomIntFromInterval(3, 10)
).map((char) => ({ char }));
