function reajustar(){
    let valor = Number(document.getElementById("valor").value);
    let resultado = document.getElementById('resultado');
    let cashback = 0;

    
    if (valor>300){
        cashback = valor * 0.05;
    }
    else {
        cashback = 0;
    }

    let valorfinal = valor - cashback;

    resultado.innerHTML = `Cashback: R$${cashback.toFixed(2)} <br>Preço final: R$${valorfinal.toFixed(2)}`;
}