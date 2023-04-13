const crypto = require('crypto');

// Original data (an array of numbers)
const data = [1, 2, 3, 4, 5];
const input = 3;

const g = 2;
 
const gToThePowerX = data.map(x => g**x)
// Hash function
function hash(value) {
  return crypto.createHash('sha256').update(value.toString()).digest('hex');
}

// Homomorphic hash of the original data
const homomorphicHash = data.map(hash);

// Remove an item from the original data (for example, the number 3)
const indexToRemove = data.indexOf(input);
if (indexToRemove !== -1) {
  data.splice(indexToRemove, 1);
}

// Homomorphic hash of the updated data (without revealing the original data)
const updatedHomomorphicHash = homomorphicHash.filter((_, index) => index !== indexToRemove);


const gToThePowerInput = g**input; // shared by user
const gToThePowerXslashInput = data.map(x => g**x) // shared by user


//checking
const toCheck = [...gToThePowerXslashInput, gToThePowerInput]
console.log(gToThePowerX.sort());
console.log(toCheck.sort());
