
let modelos = [];
let veiculos = [];



function cadastrarModelo (nomeDoModelo, nomeDaMarca) {
    modelos.push(nomeDoModelo) 
    console.log(`Modelo ${nomeDoModelo} cadastrado com sucesso!`)     
} 
function cadastrarVeiculo (veiculo) { 
    veiculos.push(veiculo);
    console.log(`Veiculo ${veiculo.nomeMarca} cadastrado com sucesso!`)  
}
function listarVeiculos() { 
    for(let veiculo of veiculos){
        console.log(`Marca: ${veiculo.nomeMarca}, 
        Modelo: ${veiculo.nomeModelo}, 
        kM: ${veiculo.km}, 
        Valor: ${veiculo.valor}, 
        Cor: ${veiculo.cor}`)
    }
    return veiculos;
}



cadastrarModelo("Toro")
cadastrarModelo("Tucson")
cadastrarModelo("F1")
console.log(modelos); 

let veiculo1= {
    nomeMarca: "Fiat" , 
    nomeModelo: "Toro",
    km: 61000, 
    valor: 98000,
    cor: "Vermelho" 

}
cadastrarVeiculo(veiculo1);



let veiculo2= {
    nomeMarca: "Hiunday" , 
    nomeModelo: "Tucson",
    km: 57000, 
    valor: 58000,
    cor: "Preto" 

} 
cadastrarVeiculo(veiculo2);


let veiculo3= {
    nomeMarca: "Ferrari" , 
    nomeModelo: "F1",
    km: 48000, 
    valor: 500000,
    cor: "Amarelo" 
}
cadastrarVeiculo(veiculo3);

listarVeiculos();


