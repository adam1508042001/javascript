"use strict";

const kelvin = function () {
  const mesures = {
    type: "temp",
    unit: "celsius",
    //FIX THIS BUG by transforming yhe type of this into numbers
    valeur: Number(prompt("degrees celsius:")),
  };

  //   console.log(mesures.valeur);
  //   console.warn(mesures.valeur);
  //   console.error(mesures.valeur);

  console.table(mesures);

  const kelvin = mesures.valeur + 273;
  return kelvin;
};

//TODO IDENTIFY THE BUG
//TODO TRY TO SEE THE COMPOINANTS OF THE FUNCTION
//EXEMPLE MESURES.VALEUR

//TODO FIND THE BUG

console.log(kelvin());

// 2) Breaking up into sub-problems
// - Merge 2 arrays

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);
