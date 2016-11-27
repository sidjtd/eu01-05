debugger;
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

function fibonacciSequence(para){
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
fibonacciSequence(10000);