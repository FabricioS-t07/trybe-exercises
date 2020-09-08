let n = 5;
let asterisco = "*";
let saida = "";
let posisao = n;

for (let i = 1; i <= n ; i += 1){
  for (let i = 1 ; i <= n; i += 1){
    saida += ( i < posisao ) ? " " : asterisco ;
  };
console.log(saida);
posisao -= 1;
saida = "";
};

