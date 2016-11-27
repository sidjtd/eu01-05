debugger;
//Helper Functions
function isDivisibleBy(numA,numB){
  if (numA % numB === 0){
    return true;
  }else{
    return false;
  }
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

function largestPrimeFactor(para){
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
console.log(largestPrimeFactor(600851475143));
//Answer: 6857