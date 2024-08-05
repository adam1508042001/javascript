//les objets
"use strict";
// const jonas = {
// firstName:'mohamed adam',
// secondName: 'afroune',
// dateOfBirth: '06-03-2005',
// gender: 'male',
// nationality:'algerienne',
// friends:['jessica', 'pierre', 'saen']
// };

// jonas.hasDriversLicense = 'no';

// jonas.location = 'france';

// jonas['number'] = '0604158772';

// jonas['job'] = 'developper'

// const interestedIn = prompt ('what do you want about afroune ?? choose firstname , secondnale, date...' )

// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else {
//     console.log('wrong request ! choose between fisrtname....')
// }

//challenge
//"jonas has 3 freinds, and his best freind is called sch"

const jonas = {
  firstName: "mohamed adam",
  secondName: "afroune",
  dateOfBirth: "15-06-2006",
  gender: "male",
  nationality: "algerienne",
  friends: ["jessica", "pierick", "sean"],

  // calcAge: function() {

  //   return 2024 - 2001;
  // }

  //on peut mettre this dans console.log pour que l'objet jonas s'affiche
  //  console.log(this);

  //   calcAge: function() {

  //     return 2024 - this.birthYear;
  //   }

  //store the return of this function on a variable this.age et ajouter cette variable dans notre objet
  calcAge: function () {
    this.age = 2024 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return ` ${this.firstName} is a ${this.job} , and he has ${
      this.hasDriversLicense ? "a" : "no"
    } drivers license.`;
  },
};

jonas.birthYear = "2006";

jonas.hasDriversLicense = 0;

jonas.location = "france";

jonas["number"] = "0606060606";

jonas["job"] = "developper";

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends.at(2)}`)

//cette phrase console.log(jonas.calcAge(1999)); va pas es se faire car on a deja passé l'argument this dans  calcAge: function() {return 2024 - this.birthYear;}
//en d'autres mots ça va compter l'age de 2001  qui est la birthYear de jonas
//this est vraiment usefull par exemple si on change le nom de notre objet jonas en jonas2 , on sera obligé de tout changer

// console.log(jonas.calcAge());

// console.log(jonas.age);

//challenge
//write "" jonas is a 23 year old developper, and he has a/no drivers license

const driverLicense = function hasOrNoDriverLicense() {
  if (jonas.hasDriversLicense) {
    return "a";
  } else {
    return "no";
  }
  return;
};

driverLicense();
console.log(jonas.calcAge());
console.log(
  `${jonas.firstName} is a ${jonas.calcAge()} years old ${
    jonas.job
  } , and he has ${driverLicense()} driver license.  `
);

console.log(jonas.getSummary());

//amazing job
