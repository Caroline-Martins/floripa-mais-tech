let filmes = [];

let inputNome = document.querySelector("#nome");
let inputDuracao = document.querySelector("#duracao");
let inputNota = document.querySelector("#nota");
let inputPesquisar = document.querySelector("#input-pesquisar");
let btnCadastrar = document.getElementById('button-cadastrar');
let btnBuscar = document.getElementById('button-buscar');
let btnImagem = document.getElementById('teste');
let img = document.getElementById('imagem-heart');


btnCadastrar.onclick = function () {
    let titulo = inputNome.value;
    let duracao = inputDuracao.value;
    let nota = inputNota.value; 
    let favorito = false;
    let assistido = false;
    let img= 'img/heart-empty.png';
    

    if(temTituloJaCadastrado(titulo)) {
        alert("Já possui um filme com esse mesmo título");
    } else {
        cadastrarFilme({titulo, duracao, nota, favorito, assistido, img})
        alert('Filme adicionado com sucesso!!');
    }
    
    limparCampos();
};

inputPesquisar.addEventListener("input", () => {
    let filmesPesquisados = filmes.filter(filme => 
        filme.titulo.toLowerCase().includes(inputPesquisar.value))       
    if (filmesPesquisados.length > 0) {
        let html = "";
        filmesPesquisados.forEach(filme => {
            html += `<fieldset><li>${filme.titulo}</li> 
                    <li>${filme.nota}</li>
                    <li>${filme.duracao}</li>
                    </fieldset>`;
        });
        document.querySelector("#lista-filmes").innerHTML = html;
    }
  });

btnBuscar.onclick = function () {  
    debugger
    buscarFilmes();
    let inputPesquisar = document.getElementById('input-pesquisar').value;
    let filmesPesquisados = filmes.filter(filme => 
        filme.titulo.toLowerCase().includes(inputPesquisar.toLowerCase()))       
    if (filmesPesquisados.length > 0) {
        let html = "";
        filmesPesquisados.forEach(filme => {
            html += `<fieldset><li>${filme.titulo}</li> 
                    <li>${filme.nota}</li>
                    <li>${filme.duracao}</li></fieldset>`;
        });
        document.querySelector("#lista-filmes").innerHTML = html;
    } else {
        alert("Não foi encontrado nenhum filme com esse titulo!");
    }
};



function temTituloJaCadastrado(titulo) {
    buscarFilmes();
    return filmes.filter(filme => filme.titulo == titulo).length > 0;     
} 
function buscarFilmes(){
    filmes = JSON.parse(localStorage.getItem("filmes")) || [];
}

function cadastrarFilme(filme) {
    filmes.push(filme);
    localStorage.setItem("filmes", JSON.stringify(filmes));    
}

function limparCampos() {
    inputNome.value = "";
    inputDuracao.value = "";
    inputNota.value = "";
}

function listarFilmes(){
    filmes = JSON.parse(localStorage.getItem("filmes")) || [];
    let html = "";
    filmes.forEach(filme => {
        html += `<fieldset><li>Título: ${filme.titulo}</li> 
                <li>Nota: ${filme.nota}</li>
                <li>Duração em minutos: ${filme.duracao}</li>
                <button onclick="adicionarFilmeFavorito('${filme.titulo}')"><img class="imagem-heart" src="${filme.img}"/></button>
                </fieldset>`;
    });
    document.querySelector("#lista-filmes").innerHTML = html;
}
listarFilmes();


function adicionarFilmeFavorito(tituloFilme){
    let quantidadeFilmesFavoritos = filmes.filter(f => f.favorito).length;

    filmes.map(filme => {
        if(tituloFilme === filme.titulo) {
            if (filme.favorito){
                filme.img = "img/heart-empty.png"
                filme.favorito = false
            } 
            else if (quantidadeFilmesFavoritos >= 3){
                alert("Já existem três filmes favoritos");
            } else {
                filme.img = "img/heart.png"
                filme.favorito = true;
            }
        }
    });
    localStorage.setItem("filmes", JSON.stringify(filmes));  
    listarFilmes();
}

  

  
   
