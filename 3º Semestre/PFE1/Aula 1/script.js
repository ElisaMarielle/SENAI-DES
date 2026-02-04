function reajustar(){
    let preco = Number(document.getElementById("preco").value);
    let resultado = document.getElementById('resultado');
    let desconto = 0;

    
    if (preco>=2500){
        desconto = preco * (15/100);
    }
    if (preco>=2000){
        desconto = preco * (12/100);
    }
    if (preco>=1000){
        desconto = preco * (8/100);
    }
    if (preco>=500) {
        desconto = preco * (4/100);
    } else {
        desconto = 0;
    }

    let precofinal = preco - desconto;

    resultado.innerHTML = `Desconto de R$${desconto.toFixed(2)} <br>Preço final: R$${precofinal.toFixed(2)}`;
}