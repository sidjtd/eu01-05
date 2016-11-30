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

function sumOfSquares(para){
  var sumOfSq = 0;
  var sqOfSum = 0;
  for (var i = 1; i < para+1; i++){
    sumOfSq += i*i;
    sqOfSum += i;
  }
  sqOfSum = sqOfSum*sqOfSum;
  console.log(sqOfSum - sumOfSq);
}
sumOfSquares(100);
//Answer :  25164150

