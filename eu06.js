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

//-----------------
/*function sumOfSquares(para){
  var sumOfSq = 0;
  var sqOfSum = 0;
  for (var i = 1; i < para+1; i++){
    sumOfSq += i*i;
    sqOfSum += i;
  }
  sqOfSum = sqOfSum*sqOfSum;
  console.log(sqOfSum - sumOfSq);
}
sumOfSquares(100);*/
//Answer :  25164150

/*function primeHunt(primePosition){
  var array = [2];
  var nowTesting = 3;
  while(array.length < primePosition) {
    var isPrime = true;
    var divideBy = 3;   //Since 1 doesn't count, 2 is not prime
    var testCeiling = Math.sqrt(nowTesting)+1;
       ^ This helps.... alot.
      Limits checking to #'s only less than sqrt of # cuz a non-prime
      #'s max poss factorial has to be it's sqrt or less
    while(divideBy < testCeiling){
      if(nowTesting % divideBy === 0){
        isPrime = false;
        divideBy = testCeiling;
      }else {
        divideBy = divideBy + 2;
      }
    }

    if (isPrime){
      array.push(nowTesting);
    }
    nowTesting += 2;
  }
  console.log(primePosition+"th prime is: "+array[array.length - 1]);
}

primeHunt(10001);*/
//Answer: 104743