const produtos = [
    {
        nome: "Arruda",
        preco: 3.0,
        descricao: "Ótima erva para banhos de mau-olhado, limpeza, afastar inveja, proteção.",
        foto: "https://acdn-us.mitiendanube.com/stores/001/947/834/products/12151-12151_20250409133734377457-62c55c737a9125138c17571237285117-1024-1024.webp"
    },
    {
        nome: "Manjericão",
        preco: 4.0,
        descricao: "Ótimo tempeiro, também pode ser usado para banhos.",
        foto: "https://nutritotal.com.br/publico-geral/wp-content/uploads/2021/11/Manjericao_beneficios_Nutritotal_Para_Todos_novosite.jpg"
    },
    {
        nome: "Louro",
        preco: 4.50,
        descricao: "Ótimo tempeiro, também pode ser usado para banhos.",
        foto: "https://nutritotal.com.br/publico-geral/wp-content/uploads/2021/11/Manjericao_beneficios_Nutritotal_Para_Todos_novosite.jpg"
    },
    {
        nome: "Alecrim",
        preco: 3.0,
        descricao: "Ótimo tempeiro, também pode ser usado para banhos.",
        foto: "https://nutritotal.com.br/publico-geral/wp-content/uploads/2021/11/Manjericao_beneficios_Nutritotal_Para_Todos_novosite.jpg"
    },
    {
        nome: "Flor de hibísco seca",
        preco: 5.50,
        descricao: "Ótimo tempeiro, também pode ser usado para banhos.",
        foto: "https://nutritotal.com.br/publico-geral/wp-content/uploads/2021/11/Manjericao_beneficios_Nutritotal_Para_Todos_novosite.jpg"
    },
    {
        nome: "Sálvia",
        preco: 4.0,
        descricao: "Ótimo tempeiro, também pode ser usado para banhos.",
        foto: "https://nutritotal.com.br/publico-geral/wp-content/uploads/2021/11/Manjericao_beneficios_Nutritotal_Para_Todos_novosite.jpg"
    },
    {
        nome: "Artemísia",
        preco: 6.0,
        descricao: "Ótimo tempeiro, também pode ser usado para banhos.",
        foto: "https://nutritotal.com.br/publico-geral/wp-content/uploads/2021/11/Manjericao_beneficios_Nutritotal_Para_Todos_novosite.jpg"
    },
    {
        nome: "Erva-doce",
        preco: 5.8,
        descricao: "Ótimo tempeiro, também pode ser usado para banhos.",
        foto: "https://nutritotal.com.br/publico-geral/wp-content/uploads/2021/11/Manjericao_beneficios_Nutritotal_Para_Todos_novosite.jpg"
    },
    {
        nome: "Camomila",
        preco: 3.5,
        descricao: "Ótimo tempeiro, também pode ser usado para banhos.",
        foto: "https://nutritotal.com.br/publico-geral/wp-content/uploads/2021/11/Manjericao_beneficios_Nutritotal_Para_Todos_novosite.jpg"
    },
    {
        nome: "Lavanda",
        preco: 8.0,
        descricao: "Ótimo tempeiro, também pode ser usado para banhos.",
        foto: "https://nutritotal.com.br/publico-geral/wp-content/uploads/2021/11/Manjericao_beneficios_Nutritotal_Para_Todos_novosite.jpg"
    },
    
]

const lista = document.getElementById('produtos');
lista.innerHTML = "";

produtos.forEach (produto => {
    lista.innerHTML += `
    <div class="produtos">
        <h3>${produto.nome}</h3>
        <p>$${produto.preco} reais</p>
        <p>${produto.descricao}</p>
        <div class="foto">
            <img src="${produto.foto}" alt="${produto.nome}">
        </div>
        <button onclick="addCarrinho()">Adicionar ao carrinho</button>
    </div>
    `
});

function addCarrinho(){
    
}