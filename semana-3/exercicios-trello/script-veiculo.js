preencherSelect(); 

function preencherSelect(){
    debugger    
    let modelos = JSON.parse(localStorage.getItem("modelos")) || [];
    for(let objModelo of modelos) { 
        let elementoCriado = criarModelo(objModelo) 
        adicionarElemento(elementoCriado)  
    }
} 

function criarModelo(objModelo){
    let criarModelo = document.createElement("option"); 
    criarModelo.value = objModelo.modelo;
    criarModelo.innerHTML = objModelo.modelo;
    return criarModelo;
} 
function adicionarElemento(elementoCriado) {
    const select = document.querySelector('select')
    select.appendChild(elementoCriado);
} 
function cadastrarVeiculo(){
    let veiculosCadastrados = JSON.parse(localStorage.getItem("veiculos")) || [];   
    let modelo = buscarModeloDoInput();
    let cor = buscarCorDoInput();
    let km = buscarKmDoInput();
    let valor = buscarValorDoInput();
    let imagem = buscarImagemDoInput();

    let objVeiculo = {
        modelo,
        cor,
        km,
        valor, 
        imagem
    }
    veiculosCadastrados.push(objVeiculo);
    localStorage.setItem("veiculos", JSON.stringify(veiculosCadastrados));
    document.getElementById("veiculo-cadastrado").innerText = `Veiculo ${objVeiculo.modelo} cadastrado com sucesso!`;
}
function buscarModeloDoInput(){
    let modelo = document.getElementById("modelo").value;
    document.getElementById("modelo").value = "";
    return modelo;
} 
function buscarCorDoInput(){
    let cor = document.getElementById("cor").value;
    document.getElementById("cor").value = "";
    return cor; 
}
function buscarKmDoInput(){
    let km = document.getElementById("km").value;
    document.getElementById("km").value = "";
    return km;
}
function buscarValorDoInput(){
    let valor = document.getElementById("valor").value;
    document.getElementById("valor").value = "";
    return valor;
}
function buscarImagemDoInput(){
    let imagem = document.getElementById("imagem").value;
    document.getElementById("imagem").value = "";
    return imagem;
}
