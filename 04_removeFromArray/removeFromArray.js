const testArray = [2,3,4,5,6,7,8];

const removeFromArray = function(array, ...items) {
  let index = 0;
  for (let item of items){

    for (let value of array){
      
      if (item === value){
        array.splice(index, 1);
        index--;
      }

      index++;
    }
    
    index=0;
  }
return array;
};


let myNewArray = removeFromArray([1,2,3,4], 3);
console.log(myNewArray)

// console.log(typeof [2,2,3]);
// Do not edit below this line
module.exports = removeFromArray;
