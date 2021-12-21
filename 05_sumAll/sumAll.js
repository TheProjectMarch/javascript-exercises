const sumAll = function(num1, num2) {

  if (typeof num1 !== 'number'|| num1 < 0 || typeof num2 !== 'number' || num2 <0 ){
    return "ERROR";
  }
  
  let lowestNum = Math.min(num1, num2);
  let higherNum = Math.max(num1, num2);
  let totalSum = 0
  for (let i = lowestNum; i <= higherNum; i++){
    totalSum+= i;
  }
  
  return totalSum;

};

let testSum = sumAll(5, 9);

console.log(testSum);

// Do not edit below this line
module.exports = sumAll;
