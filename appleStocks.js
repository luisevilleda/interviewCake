function bestProfit(arr) {
  if (arr.length < 2) {
    throw new Error('You must buy AND sell, therefore at least two times are required.');
  }
  var sell = arr[arr.length - 1];
  var buy = arr[arr.length - 2];
  var greatestProfit = sell - buy;

  for(var i = arr.length - 1; i > 0; i--) {
    buy = arr[i - 1];
    if (arr[i] > sell) {
      sell = arr[i];
    }
    var profit = sell - buy;
    if (sell - buy > greatestProfit) {
      greatestProfit = sell - buy;
    }
  };
  console.log(greatestProfit);
  return greatestProfit;
};

var a = [10, 7, 5, 8, 11, 9];
var b = [10, 9, 8, 7, 6, 3];
var c = [1, 2, 3, 4, 8, 10]
bestProfit(a);
bestProfit(b);
bestProfit(c);
