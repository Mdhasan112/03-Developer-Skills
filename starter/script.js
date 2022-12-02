// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = 30;
// const calcAge = (birthYear) => 2037 - birthYear;
// console.log(calcAge(2005));

/*
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

//marge 2 array
const amplitude = calcTempArray(temperature);
console.log(amplitude);

const array1 = ['Vijendra', 'Singh'];
const array2 = ['Singh', 'Shakya'];

const countArray = (array1, array2) => {
  const newArray = array1.concat(array2);
  console.log(newArray);
};

countArray(array1, array2);
*/
/*
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'Celsius',
    value: Number(prompt('Degree Celsius')),
  };
  console.log(typeof measurement.value);
  const kelvin = measurement.value + 250;
  return kelvin;
};

console.log(measureKelvin());
*/
// const arr = ['17', '21', '23'];
// const printForecast = function (arr) {
//   console.log(
//     `...${arr[0]}C in 1 day...${arr[1]}C in 2 days...${arr[2]}C in 3 days`
//   );
//   // for (let i = 0; i < arr.length; i++) {
//   //   const result = arr[i];
//   //   console.log(result);
//   // }
// };

// printForecast(arr);

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`... ${data1[0]}ºC ... ${data1[1]}ºC ... ${data1[2]}ºC ...`);

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}ºC in ${i + 1} days ... `;
  }
  console.log('...' + str);
};
