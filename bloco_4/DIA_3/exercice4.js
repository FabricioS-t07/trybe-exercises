let n = 5;
let saida = "";
let linhaMeio = Math.ceil((n+1)/2);
let asterisco = "*";
let linhaDireita = linhaMeio;
let linhaEsquerda = n;


for ( let i = 1; i <= n ; i += 1){
  saida += ( i < linhaDireita && linhaEsquerda > i) ? " " : asterisco;
  console.log(saida);
}
