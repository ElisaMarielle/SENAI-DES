//  .length
// retorna o tamanho da string
let nome = 'Marilia';

console.log("Caracteres do nome: " + nome.length);

//  .trim()
// remove espaços do começo e fim da string
let texto = "      Olá Mundo    "

console.log("\nRemoção de espaços: " + texto.trim());

//  .toLowerCase()
// deixa todas as letras em minúsculo
let email = "TESTE@EMAIL.COM";

console.log("\nLetras em minúsculo: " + email.toLowerCase());

//  .toUpperCase()
// deixa todas as letras em maiúsculo
let maiusculo = "marilia";

console.log("\nLetras maiúsculas: " + maiusculo.toUpperCase());

//  .includes
// verifica se a string contem um determinado valor
// retorna true ou false
let mail = "teste@email.com";

console.log("\nContém @: " + mail.includes('@'));

//  .split()
// divide uma string em partes e retorna um array
// o parâmetro define onde a divisão vai ser feita
let nomeCompleto = "Marilia Almeida";
let split = nomeCompleto.split(" ");

console.log("\nArray do nome: " + split);

//  .endsWith()
// verifica se a string termina com determinado valor
//retorna true ou false
let documento = "Documnto.pdf";

console.log("\nTermina com 'pdf'?: " + documento.endsWith(".pdf"));


// ================ ARRAYS =================
//  ARRAYS armazenam listas de valores

//  .push()
// adiciona um elemento ao final da string
let numeros = [1, 2];
numeros.push(3);
console.log("\nAdiciona: " + numeros);

//  .splice()
// remove ou adiciona elementos em posições específicas
let lista = [1, 2, 3, 4];

// elemento 1: separador     elemento 2: limite
lista.splice(1, 1);

console.log("\nSplit: " + lista);

//  .forEach()
// percorre todos os elementos do array
//retorna novo array
lista.forEach(n => {
    console.log("\nPercorre: " + n);
});

//  .map()
// percorre o array e retorna um novo array transformado
let numero = [1, 2, 3];
let dobrado = numero.map(n => n * 2);

console.log("\nDobrado: " + dobrado);

//  .filter()
// retorna um novo array com elementos que atendem uma condição
let nums = [1, 2, 3, 4];
let pares = numeros.filter(n => n % 2 === 0);

console.log("\nNúmeros pares: " + pares);

//  .find()
// retorna o primeiro elemento que atende uma condição
let find = [1, 2, 3, 4];
let encontra = find.find(n => n > 2);

console.log("\nMaior que 2: " + encontra);

//  .some()
// verifica se pelo menos um elemento atende à condição
//retorna true ou false
let num = [1, 2, 3];
let existe = num.some(n => n > 3);

console.log("\nExiste maior que 3?: " + existe);

//  .every()
// verifica se todos os elementos atendem à condição
// retorna true ou false
let par = [2, 4, 6];
let todos = par.every(n => n % 2 === 0);

console.log("\nTodos são pares?: " + todos);


let placa = "A783-fh99.8";
let nplaca = placa.replaceAll(".", "").replaceAll("-", "").replaceAll(/[a-zA-z]/gi, "");
console.log(nplaca);
