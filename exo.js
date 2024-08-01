let markMass = 78;
let  johnMass = 92;

let markH = 1.69;
let johnH = 1.95;


const markBMI = markMass / (markH ** 2);
console.log('la bmi de mark est ' + markBMI);

const johnBMI = johnMass / (markH ** 2 );
console.log("le bmi de john est de " + johnBMI);


const markHigherBMI = markBMI > johnBMI;

console.log(markHigherBMI);

