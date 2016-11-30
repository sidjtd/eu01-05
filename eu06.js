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
  var sumSto = 0;
  for (var i = 0; i < para; i++){
    sumSto += i*i;
  }
  console.log(sumSto);
}

sumOfSquares(10);