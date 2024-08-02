//les objets 
'use strict'
const jonas = {
firstName:'mohamed adam',
secondName: 'afroune',
dateOfBirth: '08-04-2001',
gender: 'male',
nationality:'algerienne',
friends:['akram', 'rachid', 'moha']
};




const interestedIn = prompt ('what do you want about afroune ?? choose firstname , secondnale, date...' ) 


if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('wrong request ! choose between fisrtname....')
}

jonas.location = 'france';

console.log(jonas);