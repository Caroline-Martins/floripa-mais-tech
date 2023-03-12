let salarioInicial = 1000; 
let metaSalarial = 1500; 
let quantidadeDeMeses = 0; 

for (let i = 6 ; salarioInicial < metaSalarial ; i+=6){

    let aumento = salarioInicial * 0.1; 
    salarioInicial += aumento; 
    console.log(salarioInicial);
    quantidadeDeMeses = i;

}
console.log("Quantidade de meses para chegar na meta salarial " + quantidadeDeMeses);







