var currentBase = "Binary";

function detectBase(selectedRadio) {
  document.getElementById('typeOfConversion').innerHTML = selectedRadio.value + " Conversion:";

  if(currentBase != selectedRadio.value) {
    if(selectedRadio.value == "Binary")
      convertToBinaryFromDecimal();
    else if(selectedRadio.value == "Hexadecimal")
      convertToHexFromDecimal();
  }
}

function runConversion() {
  if(document.getElementById('typeOfConversion').innerText == "Binary Conversion:") {
    convertToBinaryFromDecimal();
  }
  else if(document.getElementById('typeOfConversion').innerText == "Hexadecimal Conversion:") {
    convertToHexFromDecimal();
  }
}

function convertToBinaryFromDecimal() {
  var remainder;
  var nextNum;
  var binaryString = new Array();

  var decimal = document.getElementById('numberInput').value;
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

  currentBase = "Binary";
}

function convertToHexFromDecimal() {
  var remainder;
  var nextNum;
  var hexString = new Array();

  var decimal = document.getElementById('numberInput').value;
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
      hexString[0] = 0;
    }

    while(nextNum > 0) {
      remainder = nextNum % 16;
      nextNum /= 16;
      nextNum = Math.floor(nextNum);

      switch(remainder) {
        case 10:
          remainder = 'A';
          break;
        case 11:
          remainder = 'B';
          break;
        case 12:
          remainder = 'C';
          break;
        case 13:
          remainder = 'D';
          break;
        case 14:
          remainder = 'E';
          break;
        case 15:
          remainder = 'F';
          break;
      }

      hexString[i] = remainder;
      i++;
    }

    document.getElementById('binaryOutput').innerHTML = print(hexString);
  }

  currentBase = "hexadecimal";
}

function print(arr) {
  arr.reverse();
  var output = "";
  for(var i = 0; i < arr.length; i++) {
    output += arr[i];
  }
  //console.log(output);
  return output;
}
