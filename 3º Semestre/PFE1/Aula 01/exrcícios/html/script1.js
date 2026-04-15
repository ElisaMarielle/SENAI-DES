function reajustar(){
    let valor = Number(document.getElementById("salario").value);
    let resultado = document.getElementById('resultado');
    let bonus = 0;

    
    if (valor>2000){
        bonus = valor * 0.10;
    }
    else {
        bonus = 0;
    }

    let resultadofinal = valor + bonus;

    resultado.innerHTML = `Bônus de R$${bonus.toFixed(2)} <br>Salário final: R$${resultadofinal.toFixed(2)}`;
}