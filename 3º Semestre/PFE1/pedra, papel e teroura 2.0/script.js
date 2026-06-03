var regras = document.getElementsByClassName('regras')[0]

function mostrarRegras(){
    regras.style.display = "flex"
}
function fecharRegras(){
    regras.style.display = "none"
}

//---------------------------------------------------------//

let selectedOption = "";
const opcoes = document.querySelectorAll(".opcoes button");

opcoes.forEach(opcao => {
    opcao.addEventListener("click", () => {
        opcoes.forEach(item => {
            item.classList.remove("selected");
        });
        opcao.classList.add("selected");
        selectedOption = opcao.dataset.value;
  });
});

//---------------------------------------------------------//

const cells = document.querySelectorAll("td");

cells.forEach(cell => {
    cell.addEventListener("click", () => {
        if(selectedOption === "") {
            return;
        }
        cell.innerHTML = `<img src="./images/${selectedOption}.png">`;
        cell.dataset.value = selectedOption;
    });
});

//---------------------------------------------------------//

// botão verificar
const botaoVerificar = document.querySelector("#verificar");

cells.forEach(cell => {
    cell.addEventListener("click", () => {
        if (selectedOption === "") return;

        cell.innerHTML = `<img src="./images/${selectedOption}.png">`;
        cell.dataset.value = selectedOption;

        verificarTabelaCompleta();
    });
});

function verificarTabelaCompleta() {
    const cellsJogaveis = [...cells].filter(
        cell => cell.dataset.answer
    );

    const completa = cellsJogaveis.every(
        cell => cell.dataset.value
    );

    if (completa) {
        botaoVerificar.style.display = "block";
    }
}

document.getElementById("verificar").addEventListener("click", checkBoard);

function checkBoard() {
    
    let correct = true;

    cells.forEach(cell => {
        cell.classList.remove("correto", "errado");
        const playerAnswer = cell.dataset.value;
        const correctAnswer = cell.dataset.answer;

        if(playerAnswer === correctAnswer) {
            cell.classList.add('correto');
        }else {
            cell.classList.add('errado');
            correct = false;
        }
    });

    cells.forEach(cell => {
        cell.addEventListener("click", () => {
            if(cell.dataset.fixed === "true") {
                return;
            }
            if(selectedOption === "") {
                return;
            }
            cell.innerHTML = `<img src="./images/${selectedOption}.png">`;
            cell.dataset.value = selectedOption;
        });
    });

    const mensagem = document.getElementById("mensagem");
    if(correct) {
        mensagem.textContent = "🎉 Você venceu!";
    }else {
        mensagem.textContent = "❌ Ainda tem erros!";
    }

}

//---------------------------------------------------------//

const botaoResetar = document.querySelector("#reset");

botaoResetar.addEventListener("click", () => {
    cells.forEach(cell => {
        if (cell.dataset.fixed === "true") {
            return;
        }
        cell.innerHTML = "";
        delete cell.dataset.value;
        cell.classList.remove("correto");
        cell.classList.remove("errado");
    });
    selectedOption = "";
    opcoes.forEach(opcao => {
        opcao.classList.remove("selected");
    });
    botaoVerificar.style.display = "none";
    mensagem.textContent = ""
});