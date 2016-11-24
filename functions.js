function convertToBinaryFromDecimal() {
  var remainder;
  var nextNum;
  var binaryString = new Array();

  var decimal = document.getElementById('decimalNumber').value;
  decimal = parseInt(decimal);
  //console.log(decimal); //check to make sure number is read in correctly

  if (isNaN(decimal)) {
    document.getElementById('binaryOutput').innerHTML = "Please input a valid integer.";
    //console.log(decimal); //check to make sure number is read in correctly
  }
  else {
    nextNum = decimal;
    var i = 0;

    //Checks to see if the inputed decimal number is 0.
    if(nextNum == 0) {
      binaryString[0] = 0;
    }

    while(nextNum > 0) {
      remainder = nextNum % 2;
      nextNum /= 2;
      nextNum = Math.floor(nextNum);
      binaryString[i] = remainder;
      i++;
    }

    document.getElementById('binaryOutput').innerHTML = print(binaryString);
  }
}

function print(arr) {
  arr.reverse();
  var binary = "";
  for(var i = 0; i < arr.length; i++) {
    binary += arr[i];
  }
  console.log(binary);
  return binary;
}
