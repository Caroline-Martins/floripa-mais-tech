
function cadastrarMarca(){ 
    let marca = buscarMarcaDoInput();
    adicionarMarcaNoArray(marca);
    let elementoCriado = criarElemento(marca);
    adicionarElemento(elementoCriado);
} 

function adicionarElemento(elementoCriado) {
    let body = document.body;
    body.appendChild(elementoCriado);
} 

function buscarMarcaDoInput(){
    let valor = document.getElementById("marca").value;
    document.getElementById("marca").value = "";
    return valor;
}


function adicionarMarcaNoArray(marca){
    let marcas = JSON.parse(localStorage.getItem("marcas")) || [];
    marcas.push(marca);
    localStorage.setItem("marcas", JSON.stringify(marcas));
}

function criarElemento(marca){
    let li = document.createElement("li");
    li.innerHTML = marca;
    return li; 
}