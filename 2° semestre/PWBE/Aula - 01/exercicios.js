//exercício 1
var nome = "Elisa";
console.log("Olá,",nome);
console.log("---------------------------");

//exercício 2
var a=6, b=57;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log("---------------------------");

//exercício 3
var altura = 6;
var largura = 9;
console.log("A área do retângulo é:",altura*largura);
console.log("---------------------------");

//exercício 4
var nascimento = 1989;
if(2025-nascimento>=18){
    console.log("Você é maior de idade.");
}
else{
    console.log("Você é menor de idade.");
}
console.log("---------------------------");

//exercício 5
var numero = 8;
if(numero%2==0){
    console.log("O número é par.");
}
else{
    console.log("O número é ímpar.");
}
console.log("---------------------------");

//exercicio 6
var n1=5, n2=5, n3=4;
//1-3: c, 4-7: b, 8-10: a, 0: reprovado
if((n1+n2+n3)/3>=8){
    console.log("A");
}
else if((n1+n2+n3)/3>=4){
    console.log("B");
}
else if((n1+n2+n3)/3>=1){
    console.log("C");
}
else{
    console.log("Reprovado");
}