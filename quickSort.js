function quickSort(arr) {
  if (arr.length < 2) {
    console.log(arr);
    return arr;
  }

  var pivot = arr[0];
  var lesser = [];
  var greater = [];
  var equal = [];
  
  for (var i=0; i<arr.length; i++) {
    for (var j=0; j<arr.length; j++) {
      if (arr[j] < pivot) {
        lesser.push(arr[j]);
      } else if (arr[j] > pivot) {
        greater.push(arr[j])
      } else {
        equal.push(pivot);
      }
    }
    // console.log("pivot", pivot);
    // console.log("lesser", lesser);
    // console.log("greater", greater);
    // console.log("equal", equal);
    
    lesser = lesser.concat(equal, greater);
    // console.log("lesser concat", lesser);

    arr = lesser;
    lesser = [];
    pivot = arr[i];
    greater = [];
    equal = [];
    
    // console.log("arr", arr);
  }
  console.log("result", arr);
  return arr;
}

quickSort([9,2,4,2,1,5,2,4,2,5,6,4,3,7,10,1,8])
