function multiplesFinder(para){
  var numHolder =0;
  for ( var i = 0; i < para; i++){
    if(i%3===0||i%5===0){
      numHolder += i;
    }
  }
  console.log(numHolder);
}
multiplesFinder(1000);