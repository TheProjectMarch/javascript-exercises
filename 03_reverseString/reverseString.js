const reverseString = function(str) {

  const strContainer = str.split('');
  
  let reversedString='';
  
  for (let i = strContainer.length -1; i >=0 ; i--){

    reversedString+= strContainer[i];
  }
  return reversedString;
};

let test1 = reverseString('hello');
console.log(test1);
// Do not edit below this line
module.exports = reverseString;
