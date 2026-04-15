function reajustar(){
    let valor = Number(document.getElementById("conta").value);
    let resultado = document.getElementById('resultado');
    let taxa = 0;

    
    if (valor>100){
        taxa = valor * (10/100);
    }
    else {
        taxa = 0;
    }

    let valorfinal = valor - taxa;

    resultado.innerHTML = `Taxa de serviço: R$${taxa.toFixed(2)} <br>Preço final: R$${valorfinal.toFixed(2)}`;
}