const findTheOldest = function(people) {
    people.forEach((person) => {
       if(!(person.yearOfDeath)) person.yearOfDeath = (new Date()).getFullYear();
    });
    const oldToYoung = people.sort((a, b) => (a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth)? -1: 1);
    return oldToYoung[0];
};
// Do not edit below this line
module.exports = findTheOldest;
