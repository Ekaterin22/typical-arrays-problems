
exports.min = function min(array) {
  // check input
  if(!Array.isArray(array) || array.length == 0 || array == null) return 0;

  // start with first element
  let min = array[0]
  for (i = 1; i < array.length; i++){
    // if find smaller element, change value of min
    if (min > array[i]) min = array[i]
  } 
  return min;
}

exports.max = function max (array) {
  if(!Array.isArray(array) || array.length == 0 || array == null) return 0;

  let max = array[0]
  for (i = 1; i < array.length; i++){
    // if find bigger element, change value of max
    if (max < array[i]) max = array[i]
  }
  return max;
}

exports.avg = function avg (array) {
  if(!Array.isArray(array) || array.length == 0 || array == null) return 0;
  let sum = 0
  // find sum of all elements
  for (i = 0; i < array.length; i++){
    sum += array[i] 
  }
  // calculate and return average
  return sum/array.length;
}
