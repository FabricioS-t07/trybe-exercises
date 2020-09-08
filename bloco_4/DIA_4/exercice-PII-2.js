let num = [2, 3, 6, 7, 10, 1];
let arrayReturn = 0;

function biggerIndex(num){
  let bigger = 0;
  for ( i in num ){
    if ( num[i] > bigger ){
      bigger = num[i];
      arrayReturn = i;
    };
  };
  return arrayReturn;
};
console.log(biggerIndex(num));

