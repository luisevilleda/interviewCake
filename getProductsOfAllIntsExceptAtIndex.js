function getProductsOfAllIntsExceptAtIndex(arr) {
  var output = [];
  var forwardMult = 1;
  var backwardMult = 1;

  // Forward loop
  for (var i = 0; i < arr.length; i++) {
    output[i] = forwardMult;
    forwardMult *= arr[i];
  }
  // Backward Loop
  for (var j = arr.length - 1; j >= 0; j--) {
    output[j] *= backwardMult;
    backwardMult *= arr[j];
  }
  console.log(output);
  return output;
};

var a = [2, 1, 2, 3];
var b = [1, 7, 3, 4];
getProductsOfAllIntsExceptAtIndex(a);
getProductsOfAllIntsExceptAtIndex(b);
