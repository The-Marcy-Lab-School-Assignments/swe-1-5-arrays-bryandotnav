const addToFrontOrBack = (arr, value, isFront) => {
  if(arr.length === 0){
    arr.push(value)
    return arr;
  };
  if(value < arr[0]){
      arr.unshift(value)
      return arr
    } else if(value>arr[arr.length-1]){
      arr.push(value)
      return arr
    }
  return arr;
};

const reverseString = (str) => {
  const string = str.split("");
  const reversedString = string.reverse();
  const reversedStr = reversedString.join("")
  return reversedStr;
};

const newArrayFullOf = (value, numOfValue) => {
  const newArr = arr.splice(0, arr.length, value)
};

const insertIntoMiddle = (arr, num) => {
  const middleIndex = Math.floor(arr.length / 2);
  arr.splice(middleIndex, 0, num);
  console.log(arr);
};

const deleteFromMiddle = (arr) => {
  const middleIndex = Math.floor(arr.length / 2);
  arr.splice(middleIndex, 1);
  console.log(arr);
};

const isRightIndex = (arr, value, index) => {
 return arr[index] === value;
};

const roundAllNumsDown = (arr) => {
  roundedArr = arr.map(num => Math.floor(num));
  return roundedArr;
};

const getAllYCoordinates = (arr) => {
  newArr = [];
  for(let i=0;i<arr.length;i++){
    newArr.push(arr[i][1]);
  }
  return newArr;
};

module.exports = {
  addToFrontOrBack,
  reverseString,
  newArrayFullOf,
  insertIntoMiddle,
  deleteFromMiddle,
  isRightIndex,
  roundAllNumsDown,
  getAllYCoordinates,
};
