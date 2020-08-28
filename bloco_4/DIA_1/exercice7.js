const nota = 100;
let aproveitamento = "";
if (( nota >= 0 ) && (nota <= 100)){
  aproveitamento = (nota >= 90) ? console.log("A") : (nota >= 80) ? console.log("B") : (nota >= 70) ? console.log("C") : (nota >= 60) ? console.log("D") : (nota >= 50) ? console.log("E") : console.log("F");
} else{
  console.log("Não é uma nota valida");
}