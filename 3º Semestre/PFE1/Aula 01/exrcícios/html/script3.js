function reajustar(){
    let valor = Number(document.getElementById("valor").value);
    let resultado = document.getElementById('resultado');
    let desconto = 0;

    
    if (valor>200){
        desconto = valor * (5/100);
    }
    else {
        desconto = 0;
    }

    let valorfinal = valor + desconto;

    resultado.innerHTML = `Desconto de R$${desconto.toFixed(2)} <br>Preço final: R$${valorfinal.toFixed(2)}`;
}