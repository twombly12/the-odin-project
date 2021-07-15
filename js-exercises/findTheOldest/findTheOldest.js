const findTheOldest = function(people) {
    return people.reduce((oldest,current) => {
        let oldestAge = personAge(oldest.yearOfBirth, oldest.yearOfDeath)
        let currentAge = personAge(current.yearOfBirth, current.yearOfDeath)
        return oldestAge < currentAge ? current : oldest;
    })
}

const personAge = function(yearOfBirth, yearOfDeath) {
    if(!yearOfDeath) {
        yearOfDeath = new Date().getFullYear();
    }
    return yearOfDeath - yearOfBirth;
}


module.exports = findTheOldest


// jasmine findTheOldest.spec.js

// findTheOldest(people);

