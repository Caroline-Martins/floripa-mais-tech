
let pessoa= {
    genero : "F",
    idade : 17,
    estudante : false
}


if(pessoa.idade >=60 || pessoa.estudante) {
    console.log("Gratuíto");

} else if (pessoa.genero == "F" && pessoa.idade >=18) {
    console.log("O valor do ingresso feminino é 50$");

} else if (pessoa.genero == "M" && pessoa.idade >=18) {
    console.log("O valor do ingresso masculino é 80$");

} else {
    console.log("Proibido!")
} 