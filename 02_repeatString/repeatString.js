const repeatString = function(string, num) {
  let repeatedString = string;


  if (num === 0 || string === ''){
    return '';
  } 
  if (num < 0) {
    return 'ERROR';
  }
  
  for (let i = 1; i< num; i++){
    repeatedString += string;
  }
  
  return repeatedString;
}



// Do not edit below this line
module.exports = repeatString;
