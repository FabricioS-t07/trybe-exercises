const custo = 20;
const vendaValor = (custo * 1.8);
const imposto = 0.2;

const lucro = ((vendaValor - custo) - ( custo * imposto ));

if (( custo < 0 ) || ( vendaValor < 0 ) || ( imposto < 0 )){
  console.log("Error - valor menor que zero")
  return;
}
