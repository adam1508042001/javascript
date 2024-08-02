// let js = 'amazing';
// if (js === 'amazing') alert('javascript is funny!')

console.log(40 + 80 + 3 - 23);

/* it will be in the console */

//declarer une variable
let firtName = "zkr";
console.log(firtName);
console.log("my first name is " + firtName);

let second_name = "zakaria";
console.log("and my secode name is " + second_name);

const firstName = "younes";
let job = "teacher";
const birthYear = 1991;
let nowYear = 2024;

const jonas =
  "hello, i'm " +
  firstName +
  ", a " +
  (nowYear - birthYear) +
  " years old " +
  job +
  "!";
console.log(jonas);

//also we can wright it like this:

const jonas2 = `hello , my name's ${firstName} \n\ and i'm a ${
  nowYear - birthYear
} years old ${job} !`;
console.log(jonas2);

//pour un saut de ligne on utilisera \n\

const legalage = 18;
let personAge = 15;

if (personAge >= legalage) {
  console.log("cette personne est autorisée a passer le permis");
} else {
  console.log(
    `cette personne n'est pas autorisée a passer le permis , elle lui reste ${legalage - personAge } ans  pour pouvoir le passer!`
  );
};


//or 

let sarahAge = 15;

const oldEnough = sarahAge >= 18 ; 

if(oldEnough) {console.log(`sarah est autorisée a passer le permis`);} else{console.log(`sarah n'est pas autorisée a  passer le permis elle lui reste ${18 - sarahAge} ans pour le passer `);};



//or

sarahAge = 19;
if(sarahAge >= 18 ){console.log("cette personne est autorisée a passer le permis");} else{console.log(`sarah n'est pas autorisée a  passer le permis elle lui reste ${18 - sarahAge} ans pour le passer`);};