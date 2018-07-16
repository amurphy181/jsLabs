// Slot Machine: Write a function that takes any number of arrays, and returns a list containing one random element from each array. Given
// ['cat','dog','frog','giraffe',7,'bar'],
// ['cherry','pineapple','banana','bar',7], and
// ['lemon', 'cherry','banana','giraffe',7,'bar'], it might return ['dog','cherry',7]. Call this from another function, passing different numbers of arrays, printing the results. Pass the results to another function that will determine if this was a winning spin.

var testArray1 = ['cat', 'dog', 'frog', 'giraffe', 7, 'bar'];
var testArray2 = ['cherry', 'pineapple', 'banana', 'bar', 7];
var testArray3 = ['lemon', 'cherry', 'banana', 'giraffe', 7, 'bar'];

var sevenArray = [7, 7, 7, 7, 7];
var sevenArray1 = [7, 7, 7, 7, 7];
var sevenArray2 = [7, 7, 7, 7, 7];

var winningArray = [sevenArray, sevenArray1, sevenArray2];


var arrayGroup = [testArray1, testArray2, testArray3];

var totalNumberOfArraysToPass = 0;

function wordChooser(selectArray) {
  var randomWord;
  var arrayLength = selectArray.length;
  var indexSelector = Number.parseInt(((Math.random()) * arrayLength));
  randomWord = selectArray[indexSelector];
  return randomWord;
}

var selectedArray = function(arrays){
  var finalArray = [];
  for (var i = 0; i < arrays.length; i++) {
    var chosenWord = "";
    chosenWord = wordChooser(arrays[i]);
    finalArray.push(chosenWord);
  }
  if(finalArray[0] === 7 && finalArray[1] === 7 && finalArray[2] === 7){
    console.log("Winning spin with 7, 7, 7! " + finalArray);
  } else {
    console.log(`Spin was ${finalArray}`);
  }
  return finalArray;
}

console.log(selectedArray(arrayGroup));
console.log(selectedArray(winningArray));

console.log(wordChooser(testArray1));
