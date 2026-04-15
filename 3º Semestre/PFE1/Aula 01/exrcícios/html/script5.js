function reajustar(){
    let valor = Number(document.getElementById("mensalidade").value);
    let dias = Number(document.getElementById('dias').value);
    let resultado = document.getElementById('resultado');
    let multa = 0;

    
    if (dias>0){
        multa = valor * 0.02;
    }
    else {
        multa = 0;
    }

    let valorfinal = valor + multa;

    resultado.innerHTML = `Valor da multa: R$${multa.toFixed(2)} <br>Total a pagar: R$${valorfinal.toFixed(2)}`;
}