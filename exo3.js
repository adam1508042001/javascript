// //conversion de type de input ou de variable
'use strict';
// let inputYear = "1993"; //c'est ce qu'on recoit lorsque par exemple on mets un formulaire ou on ecrit l'annee et on la selectionne pas

// //pour la convertir on met 
// console.log(`l'age de cet individu est bien de ${2024 - Number(inputYear)} ans! `);


// function logger () {
//     console.log(`my name afroune adam`)
    
// }

// //invoke the function /call the function / run the function 

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges)
// {
//     let juice = `juice with ${apples} apples and ${oranges} oranges.`
// ;
// return juice;
// }


// //put the return of the function dans une variable et l'afficher 

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// //sans le mettre dans une variable  laffficher directement 
// console.log(fruitProcessor(5,0));


// //function expression
// const calculAge2 = function (birthYear) {
//     return 2024 - birthYear;
// }


// console.log(calculAge2(2001));

// //arrow function
// const calculAge3 = birthYear => 2024 -  birthYear ;
// console.log(calculAge3(2001));




function retirementCaluculate(birthYear , firstName) {

    const age = 2024 -  birthYear;
    const retirementAge = 65 ; 
    const remainingYearsForRetirement = retirementAge - age ;
    return  `${firstName} will retire in ${remainingYearsForRetirement} years!` ;

}


console.log(retirementCaluculate(2001,  "adam"));

const remain2001 = retirementCaluculate(2001 , "ademo");
console.log(remain2001);

const retirementCaluculate2 = birthYear2 => {
    const age2 = 2024 -  birthYear2;
    const retirementAge2 = 65 ; 
    const remainingYearsForRetirement2 = retirementAge2 - age2 ;
    return  `the person will retire in ${remainingYearsForRetirement2} years!` ;

}

console.log(retirementCaluculate2(2002));



//arrow function 
const averageMaroc = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const averageUSA = (score1, score2 , score3) => (score1 + score2 + score3) / 3 ;

const scoreMaroc = averageMaroc(10, 20 , 30);
const scoreUsa = averageUSA(5, 10 , 15);


const  checkWinner = function(averageMaroc, averageUSA)
{
    if (averageMaroc = averageUSA * 2 ) {
        console.log(`maroc wins`);
    }
   else if (averageUSA = averageMaroc *2 ){
        console.log(`usa wins`);
    }
    else{ console.log(`no one wins`);
    };
};

checkWinner(scoreMaroc, scoreUsa);

console.log(checkWinner(scoreMaroc, scoreUsa));