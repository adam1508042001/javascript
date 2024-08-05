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
