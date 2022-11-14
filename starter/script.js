// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = 30;
// const calcAge = (birthYear) => 2037 - birthYear;
// console.log(calcAge(2005));

const temperature = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempArray = (temp) => {
  let max = temp[0];
  let min = temp[0];

  for (let i = 0; i < temp.length; i++) {
    const curTemp = temp[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempArray(temperature);
console.log(amplitude);
