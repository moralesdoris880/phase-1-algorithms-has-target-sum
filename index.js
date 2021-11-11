function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++){ 
    for(let d = (i + 1); d < array.length;d++){
      let sum = array[i] + array[d]
      if (sum === target){
        return true;
      }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  For loop that goes through the first index and tests out with the other indexes
  if first index + second index = target return true
  if not continue iterating
  if nothing is found return false
*/

/*
  Iterates through the array and looks for two numbers that add up to the target
*/

// You can run `node index.js` to view these console logs
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
