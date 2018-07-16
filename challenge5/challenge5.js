// Credit Card Number Validator: Write a function that takes a string as input and determines if it's a valid credit card number according to the table below. If it is valid, it should return a string specifying the card type. If not, it should return false.
//
// Card Type	Number of Digits	Starts With
// AmEx	15	34, 37
// Discover	16	6011, 622126-622925, 644, 645, 646, 647, 648, 649, 65
// MasterCard	16-19	51, 52, 53, 54, 55
// Visa	13-16	4
// Valid examples can be found at: http://www.getcreditcardnumbers.com/
//
// Optional: strip non-digits from the input before validating.


var visaTest = 4929719586538931;
var mcTest = 5357595342129696;
var discTest = 6011817698896561;
var amexTest = 349961373736449;
var badCard = 33343;

var numberTester = function(inputNumber) {
  var inputString = inputNumber.toString();
  var cardTestArray = [];
  var cardTestStringArray = inputString.split("");
  var cardType = "false";
  var tempCardSplice = [];
  var tempCardNumbersSplice = arrayToNumbers(tempCardSplice);

  var spliceString = "";

  function arrayToNumbers(array){
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
      var numberHolder = Number.parseInt(array[i]);
      newArray.push(numberHolder);
    }
    return newArray;
  }

  for (var i = 0; i < cardTestStringArray.length; i++) {
    var numberHolder = Number.parseInt(cardTestStringArray[i]);
    cardTestArray.push(numberHolder);
  }

  if (cardTestArray[0] === 3) { // amex
    if (cardTestArray[1] === 4 || cardTestArray[1] === 7) {
      if (cardTestArray.length === 15) {
        console.log(typeof(cardTestArray));
        cardType = "American Express";
      }
    }
  } else if (cardTestArray[0] === 6 && (cardTestArray.length === 16)) { // discover card

    if (cardTestArray[1] === 0 && cardTestArray[2] === 1 && cardTestArray[3] === 1) {
      cardType = "Discover Card";
    }
    if (cardTestArray[1] === 5) {
      cardType = "Discover Card";
    }
    if (cardTestArray[1] === 4 && (cardTestArray[2] <= 4 || cardTestArray[2] >= 9)) {
      cardType = "Discover Card";
    }
    if (cardTestArray[1] === 2) {
      var discoverCardSplice = cardTestArray.splice(2, 6);
      if ((cardTestArray[2] === 2) && (cardTestArray[3] >= 1 && cardTestArray[3] <= 9) && (cardTestArray[4] >= 1 && cardTestArray[4] <= 9) && (cardTestArray[5] >= 1 && cardTestArray[5] <= 5)) {
        cardType = "Discover Card";
      }
    }
  } else if (cardTestArray[0] === 5 && (cardTestArray.length >= 16 && cardTestArray.length <= 19)) { // MasterCard
    if (cardTestArray[1] >= 1 && cardTestArray[1] <= 5) {
      cardType = "MasterCard";
    }
  } else if (cardTestArray[0] === 4 && (cardTestArray.length >= 13 && cardTestArray.length <= 16)) {
    cardType = "Visa";
  }

  return cardType;
}

var amex = numberTester(amexTest);
console.log(numberTester(badCard));
console.log(amex);
console.log(numberTester(discTest));
console.log(numberTester(mcTest));
console.log(numberTester(visaTest));
