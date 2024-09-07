//No 1
const str = "NEGIE123";
function reverseString(params) {
  let numIndex;
  for (let i = str.length - 1; i >= 0; i--) {
    if (isNaN(str[i])) {
      numIndex = i + 1;
      break;
    }
  }

  let alphaPart = str.slice(0, numIndex);
  let numPart = str.slice(numIndex);

  let reversedAlpha = alphaPart.split("").reverse().join("");
  return reversedAlpha + numPart;
}

console.log(reverseString(str));

//No 2
const sentence = "Saya sangat senang mengerjakan soal algoritma";
function longest(params) {
  const splittedParams = params.split(" ");
  let longestWord = splittedParams[0];
  for (let i = 0; i < splittedParams.length; i++) {
    const word = splittedParams[i];
    if (word.length < longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}
console.log(longest(sentence));

// No 3
let QUERY = ["bbb", "ac", "dz"];
let INPUT = ["xc", "dz", "bbb", "dz"];
function checkRepeatedWords(params) {
  let tempArr = [];
  for (let i = 0; i < params.QUERY.length; i++) {
    let counter = 0;

    const elementI = params.QUERY[i];
    for (let j = 0; j < params.INPUT.length; j++) {
      const elementJ = params.INPUT[j];
      if (elementI == elementJ) {
        counter++;
      }
    }
    tempArr.push(counter);
  }
  return tempArr;
}

console.log(checkRepeatedWords({ INPUT, QUERY }));
