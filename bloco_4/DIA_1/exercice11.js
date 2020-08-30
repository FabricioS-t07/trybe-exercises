const salarioBruto = 3000;
let salarioLiquido = 0;
const inss = 0;
const ir = 0;


const aliquotaInssSalario = ((salarioBruto > 5189.82) ? 570.88 : (salarioBruto > 2594.93) ? (salarioBruto * 0.89) : (salarioBruto > 1556.95) ? (salarioBruto * 0.91 ) : (salarioBruto * 0.88));

// const salario

const irAliquota = (( aliquotaInssSalario > 4664.68 ) ? (( aliquotaInssSalario * 0.275 )- 869.36) : (aliquotaInssSalario > 3751.06) ? (( aliquotaInssSalario * 0.225 )- 636.13) : (aliquotaInssSalario > 2826.66) ? (( aliquotaInssSalario * 0.15 ) - 354.8) : ( aliquotaInssSalario > 1903.99 ) ? (( aliquotaInssSalario * 0.075 )- 142.8) : 0);

salarioLiquido = (aliquotaInssSalario - irAliquota);
