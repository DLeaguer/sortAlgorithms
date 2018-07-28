
// quick sort with nested for loops
// concatenated and assigned at the end
// resets created at the end of for loop

function quickSort(arr) {
  // if (arr.length < 2) {
  //   console.log('stop arr when < 2', arr);
  //   return arr;
  // }

  var pivot = arr[0];
  var lesser = [];
  var greater = [];
  var equal = [];
  
  for (var i=0; i<arr.length; i++) {
    for (var j=0; j<arr.length; j++) {
      console.log ('');
      console.log('starting arr', arr);
      console.log('i loop index =', i);
      console.log('arr[i] =', arr[i]);
      console.log("pivot =", pivot);
      console.log('j loop index =', j);
      console.log('arr[j] is', arr[j], ' (<, =, or >) ', pivot);
      console.log('');
      if (arr[j] < pivot) {
        lesser.push(arr[j]);
        console.log('if (arr[j] < pivot) lesser.push(arr[j]) lesser =', lesser);
      } else if (arr[j] > pivot) {
        greater.push(arr[j])
        console.log("else if arr[j]>pivot then greater.push(arr[j] greater =", greater);
      } else {
        equal.push(pivot);
        console.log("else equal.push(pivot) equal =", equal);
      }
      console.log('');
      console.log('arr before concat', arr);
      console.log("lesser before concat", lesser);
    }
    
    console.log('');
    lesser = lesser.concat(equal, greater);
    console.log("lesser concat", lesser);
    console.log('lesser after concat', lesser);
    console.log('arr after concat', arr);

    pivot = arr[i];
    arr = lesser;
    lesser = [];
    greater = [];
    equal = [];
    
    console.log("arr after resets", arr);
  }
  console.log("result", arr);
  return arr;
}

// quickSort([9,2,4,2,1,5,2,4,2,5,6,4,3,7,10,1,8])
// quickSort([3,5,1,2,-3,4,1])
quickSort([3, 0, 2, 5, -1, 3, 4, 1 ]);
