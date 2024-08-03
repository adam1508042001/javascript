
'use strict'
//creation de l'objet de mark 

const mark = {
fullName: "mark miller",
H: 1.90,
mass: 64,
calcBMI: function() {
    this.Bmi = this.mass / (this.H ** 2) ;
    return this.Bmi;
}
}

console.log(mark.calcBMI());

const rachid = {
    fullName: "rachid zamoum",
    H: 1.70,
    mass: 70,
    calcBMI: function() {
        this.Bmi = this.mass / (this.H ** 2) ;
        return this.Bmi;
    }
    }

    console.log(rachid.calcBMI());


    const decision = function() {
        if (mark.Bmi > rachid.Bmi) { console.log(`le bmi de ${mark.fullName} which is ${mark.Bmi} is higher than ${rachid.fullName} which is ${rachid.Bmi}!`)
            
        } else if (mark.Bmi === rachid.Bmi) { console.log("they are equal")} else {
            console.log("rachid a gagné mellekhr")
        };
    }

decision();