

const livros=[{
    "titulo": "Harry Potter e a Ordem da Fênix",
    "autor": "J.K Rowling",
    "paginas": 703,
    "genero": "fantasia",
    "protag": "Harry Potter"
},
{
    "titulo": "Um Estudo em Vermelho",
    "autor": "Conan Doyle",
    "paginas": 184,
    "genero": "romance policial",
    "protag": "Sherlock Holmes"
},
{
    "titulo": "O Retrato de Dorian Gray",
    "autor": "Oscar Wilde",
    "paginas": 190,
    "genero": "ficção gótica",
    "protag": "Dorian Gray"
},
{
    titulo: "O Gato Preto",
    autor: "Edgar Allan Poe",
    paginas: 72,
    genero: "terror",
    protag: "narrador"
},
];
livros.forEach((livros)=> {
    if(livros.titulo==="O Gato Preto"){
        console.log(livros.titulo + ":");
        console.log("autor: " + livros.autor);
        console.log("páginas: "+livros.paginas);
        console.log("gênero: "+ livros.genero);
        console.log("protagonista: "+livros.protag);
    }
});

livros.forEach((livro, i)=> {
    if(livros.titulo==="O Gato Preto"){
        livros.splice(indice, 1);
    }
});
console.log(livros);

var novo ={
    titulo: "livro 3",
    autor: "fulano"
};

livros.push(novo);

livros.forEach((livro)=>{
    if(livro.titulo==="livro 3"){
        livros.autor="Sayury de Moraes Araujo";
        }
});
console.log(livros);