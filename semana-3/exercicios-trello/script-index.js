
function listarVeiculos(){
    let veiculos = JSON.parse(localStorage.getItem("veiculos")) || [];
    for(let objVeiculo of veiculos){
        let p  = document.createElement("p"); 
        p.innerHTML = `Modelo: ${objVeiculo.modelo} , 
                    Cor: ${objVeiculo.cor} , 
                    KM: ${objVeiculo.km} , 
                    Valor: ${objVeiculo.valor}`
                    
        document.getElementById("lista-veiculos").appendChild(p);
    } 
} 
listarVeiculos();




