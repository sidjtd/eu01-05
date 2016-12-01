debugger;
//Helper Functions
function isDivisibleBy(numA,numB){
  if (numA % numB === 0){
    return true;
  }else{
    return false;
  }
}

function removeDupes(para) {
  return para.sort().filter(function(item, pos, ary){
    return !pos || item  != ary[pos - 1];
  });
}

function getlength(number) {
    return number.toString().length;
}
/*function multiplesFinder(para){
  var numHolder =0;
  for ( var i = 0; i < para; i++){
    if(i%3===0||i%5===0){
      numHolder += i;
    }
  }
  console.log(numHolder);
}
multiplesFinder(1000);*/
//Answer: 233168

/*function fibonacciSequence(para){
  var fibA = 1;
  var fibB = 2;
  var fibSto = 0;
  var fibSum = 2;
  for ( var i = 0; i < para; i++){
    fibSto = fibB;
    fibB = fibB + fibA;
    fibA = fibSto;
    fibSto = fibA + fibB;
    if (fibSum <= 4000000 && fibSto%2===0){
      fibSum += fibSto;
      console.log("Sum: " + fibSum);
    }
  }
}
fibonacciSequence(10000);*/
//Answer: 4613732

/*function largestPrimeFactor(para){
  var factors = [];
  for(var i = 2; i <= para; i++){
    while (isDivisibleBy(para,i)){
      factors.push(i);
      para = para / i;
    }
  }
  return factors;
}
// console.log(largestPrimeFactor(13195));
console.log(largestPrimeFactor(600851475143));*/
//Answer: 6857

/*function largestPalindrome(para){
  var numA = 999;
  var numB = 999;
  var prod = 0;
  var prodReversed = 0;

  for(numA = 999; numA > 900; numA--){
    for(numB = 999; numB > 900; numB--){
      prod = numA * numB;
      prodLength = prod.toString().length;
      prodReversed = prod.toString();
      prodReversed = prodReversed.split("").reverse().join("");
      prodReversed = Number(prodReversed);
        if(prod===prodReversed){
          numA = 900;
          console.log(prod);
        }
    }
  }
}
largestPalindrome();*/
//Answer: 906609

function smallestRemainder(parameter){
  var divThisNum = 0;
  var success = false;
  while (success === false || divThisNum < 100000000) {
    success = true;
    divThisNum += 1;
    for (var diver = 2; diver <= parameter; diver++) {
      if (divThisNum % diver !== 0) {
        success = false;
        break;
      }
    }
  }
  console.log(divThisNum);
}
smallestRemainder(20);
//Answer: 232792560