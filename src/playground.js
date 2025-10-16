// const { clearArr, getFirstItem } = require('./debug');
 const {
//   addToFrontOrBack,
   reverseString,
//   newArrayFullOf,
   insertIntoMiddle,
   deleteFromMiddle,
   isRightIndex,
  roundAllNumsDown,
//   getAllYCoordinates,
 } = require('./from-scratch');
// const { uppercaseAll, destructureCoordinates } = require('./modify');
console.log(reverseString("hello"));
insertIntoMiddle([2,4,8,9], 5);
deleteFromMiddle([2,4,7,8]);
console.log(isRightIndex(['a','s','f'], 's', 2));
console.log(roundAllNumsDown([1.1, 2.2, 3.3]));