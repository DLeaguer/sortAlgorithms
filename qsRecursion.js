
// quick sort with recursion
// concatenated at the end

function quick_Sort(origArray) {
  console.log('');
  console.log('origArray start', origArray);
	if (origArray.length <= 1) { 
    console.log('STOP! origArray =', origArray);

		return origArray;
	} else {

		var left = [];
		var right = [];
		var newArray = [];
		var pivot = origArray.pop();
    var length = origArray.length;
    
    // console.log('');
    // console.log('left', left);
    // console.log('right', right);
    // console.log('newArray', newArray);
    // console.log('pivot', pivot);
    // console.log('length', length);


		for (var i = 0; i < length; i++) {
      console.log('');
      console.log('origArray in for loop', origArray);
      console.log('i =', i);
      console.log('origArray[i] =', origArray[i]);
      console.log('pivot =', pivot);
			if (origArray[i] <= pivot) {
        console.log('left.push(', origArray[i], ') <= ', pivot);
        left.push(origArray[i]);
        console.log('pushed to left', left);
			} else {
        console.log('right.push(', origArray[i], ') > ', pivot);
        right.push(origArray[i]);
        console.log('pushed to right', right);
			}
    }
    console.log('');
    console.log('pivot after', pivot);
    console.log('newArray after', newArray);
    

		return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
	}
}

var myArray = [3, 0, 2, 5, -1, 3, 4, 1 ];

console.log('');
console.log("Original array: " + myArray);
var sortedArray = quick_Sort(myArray);
console.log("Sorted array: " + sortedArray);
