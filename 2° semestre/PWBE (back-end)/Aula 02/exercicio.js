//Nome, estado, fundação, diretor, brasao, vitorias (3 pontos), derrotas (1 ponto), empates (2 pontos)

//Buscar por nome e exibir o total de pontos.

const times=[{
    "nome": "Flamengo",
    "estado": "RJ",
    "fundação": 1895,
    "diretor": "João Silva",
    "brasão": "flamengo.png",
    "vitorias": 20,
    "empates": 10,
    "derrotas": 5
},
{
    "nome": "Bahia",
    "estado": "BA",
    "fundação": 1931,
    "diretor": "Raul Aguirre",
    "brasão": "Bahia.png",
    "vitorias": 7,
    "empates": 2,
    "derrotas": 4
},
{
    "nome": "Fluminense",
    "estado": "RJ",
    "fundação": 1902,
    "diretor": "Paulo Angioni",
    "brasão": "Fluminense.png",
    "vitorias": 9,
    "empates": 5,
    "derrotas": 2
}
];
times.forEach((times)=> {
    if(times.nome==="Bahia"){
        console.log(times.nome + ":");
        console.log(times.vitorias*3+times.empates+ " Pontos");
    }
});