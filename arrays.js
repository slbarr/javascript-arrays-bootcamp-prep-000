var chocolateBars = ['snickers','hundred grand','kitkat',"skittles"];

function addElementToBeginningOfArray(array, element) {
  array1 = [array];
  var newArray1 = [element,...array1];
  return newArray1;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array2 = [array];
  array2.unshift(element);
  return array2;
}

function addElementToEndOfArray(array, element) {
  array3 = [array];
  var newArray3 = [...array3,element];
  return newArray3;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array4 = [array];
  array4.push(element);
  return array4;
}