function hasTargetSum(array, target) {
  const seenNumbers = new Set();
  // initializes an empty Set
   for(const number of array) {
     const complement = target - number;
    //  .has should return true if the Set includes the complement
    if(seenNumbers.has(complement)) return true;

    // .add should add the number to the Set
    seenNumbers.add(number);
   }
   return false;
  }

if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
