const ftoc = function(deg) {
  let degConverted = Math.round(((deg - 32) * 0.5556) * 10) / 10;
  return degConverted
};

const ctof = function(deg) {
  let degConverted = Math.round(((deg * 1.8) + 32) * 10) / 10;
  return degConverted;
};


console.log(ctof(0));
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
