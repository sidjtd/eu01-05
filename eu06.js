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