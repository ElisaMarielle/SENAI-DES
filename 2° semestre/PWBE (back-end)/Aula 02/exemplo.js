// const numeros = [1, 2, 3, 4, 5];

// for(let i=0;i<numeros.length;i++){
//     console.log("["+i + "] -> " + numeros[i]);
// }

// var soma = (a, b) => {
//     return a+b;
// }
// console.log(soma(8,12));

const numeros=[1, 2, 3, 4, 5];
const marcas=["Nike", "Adidas", "Puma"];
const usuarios=[
    {
        "nome": "Fulano",
        "matricula": "1234",
        "telefone": "(12) 1234-5678"
    }
];

usuarios.forEach( (usuarios) => {
    console.log(usuarios);
});

usuarios.forEach((usuarios) => {
    if(usuarios.matricula === "1234") {
        console.log(usuarios.nome);
        console.log(usuarios.telefone);
    }
});

// function imprime(value){
//     console.log("Value - " + value);
// }

// marcas.forEach(imprime);

// marcas.forEach( (value)=> {
//     //console.log("Value - " + value);
//     if(value==="Nike"){
//         console.log("Encontrei.");
//     }

// } );


// const carro={
//     "ano": 2023,
//     "cor": "cinza",
//     "modelo": "Creta",
//     "marca": "Hyundai",
//     "escada": true,
//     "placa": "abc1234"
// }
// console.log(carro);