const leapYears = function(year) {

  if (typeof year !== 'number'){
    return 'ERROR';
  } 
  
  if ((year % 4) || !(year % 100) && (year % 400)) {
    return false;
  } else return true;
};


console.log(leapYears(400));
console.log(leapYears(1900));
console.log(leapYears(1984));
console.log(leapYears(1985));
// console.log(leapYears());
// console.log(leapYears(1900));
// Do not edit below this line
module.exports = leapYears;

