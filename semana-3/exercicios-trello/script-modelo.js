preencherSelect();

function cadastrarModelo(){
    let modelosCadastrados = JSON.parse(localStorage.getItem("modelos")) || [];   
    let modelo = buscarModeloDoInput();
    let marcaSelecionada = buscarMarcaDoInput();
    let objModelo = {
        modelo,
        marcaSelecionada
    }
    modelosCadastrados.push(objModelo);
    localStorage.setItem("modelos", JSON.stringify(modelosCadastrados));
    document.getElementById("modelo-cadastrado").innerText = `Modelo ${modelo} cadastrado com sucesso!`;
}

function buscarModeloDoInput(){
    let modelo = document.getElementById("modelo").value;
    document.getElementById("modelo").value = "";
    return modelo;
}

function buscarMarcaDoInput(){
    let marcaSelecionada = document.getElementById("marcas").value;
    return marcaSelecionada;
}

function preencherSelect(){
    debugger
    let marcas = JSON.parse(localStorage.getItem("marcas")) || [];
    for(let marca of marcas) { 
        let elementoCriado = criarModelo(marca) 
        adicionarElemento(elementoCriado)  
    }
}


function criarModelo(marca){
    let criarModelo = document.createElement("option"); 
    criarModelo.value = marca;
    criarModelo.innerHTML = marca;
    return criarModelo;
}

function adicionarElemento(elementoCriado) {
    const select = document.querySelector('select')
    select.appendChild(elementoCriado);
} 