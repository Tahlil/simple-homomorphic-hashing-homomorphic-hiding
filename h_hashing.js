const crypto = require('crypto');

// Original data (an array of numbers)
const data = [1, 2, 3, 4, 5];
const input = 3;
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


console.log(homomorphicHash); 
const toCheck = [...updatedHomomorphicHash, hash(input)]

console.log(toCheck);