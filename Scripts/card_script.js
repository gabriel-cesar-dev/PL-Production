// =======================================
// CONTADOR DOS CARDS
// =======================================

let contadorCard = 0;


// =======================================
// RENDERIZAR CARDS
// =======================================

function renderizarCards() {

    const board =
        document.getElementById("board");

    const botao_add = 
        document.getElementById("lateral_botao");

    board.innerHTML = "";


    // ===================================
    // BOTAO ADD CARD
    // ===================================

    botao_add.innerHTML = `

    <div id="caixa-botao-adicionar-card" style="text-align: center;  ">
        
        <button id="botao-adicionar-card"
                onclick="adicionarCard()">

                <i class="fa fa-plus fa-2x" aria-hidden="true" style="color:white; padding: 10px;"></i>

                <h5 style="color: white; padding: 10px;">Adicionar Card</h5>

        </button>

    </div>

    `;


    // ===================================
    // SEM PAINEL
    // ===================================

    if (!painelAtual) {

        return;
    }


    // ===================================
    // MOSTRAR CARDS
    // ===================================

    painelAtual.cards.forEach(card => {

        board.innerHTML += `

        <div class="card bg-dark text-white"
             style="
                width: 250px;
                height: 350px;
                margin: 10px;
                border: 1px solid rgb(60,60,60);
                padding: 10px;
             ">

            <img src="${card.imagem}"
                 class="card-img-top"
                 style="
                    height: 150px;
                    object-fit: cover;
                 ">

            <div class="card-body">

                <h5 class="card-title">

                    ${card.nome}

                </h5>

                <p class="card-text">

                    Custo: R$ ${card.custo}

                </p>

                <p class="card-text">

                    Lucro: R$ ${card.lucro}

                </p>

                <button class="btn btn-danger"
                        onclick="deletarCard(${card.id})">

                    Excluir

                </button>

            </div>

        </div>

        `;
    });
}


// =======================================
// ADICIONAR CARD
// =======================================

function adicionarCard() {

    if (!painelAtual) {

        alert("Selecione um painel");

        return;
    }

    const nome =
        prompt("Nome do card:");

    if (!nome) return;

    const imagem =
        prompt("URL da imagem:");

    const custo =
        prompt("Custo:");

    const lucro =
        prompt("Lucro:");

    const novoCard = {

        id: contadorCard,

        nome: nome,

        imagem: imagem,

        custo: custo,

        lucro: lucro

    };

    painelAtual.cards.push(novoCard);

    contadorCard++;

    renderizarCards();
}


// =======================================
// DELETAR CARD
// =======================================

function deletarCard(id) {

    const indice =
        painelAtual.cards.findIndex(card => card.id === id);

    painelAtual.cards.splice(indice, 1);

    renderizarCards();
}


// =======================================
// PRIMEIRA RENDERIZAÇÃO
// =======================================

renderizarCards();