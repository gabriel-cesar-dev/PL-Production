// =======================================
// CONTADOR
// =======================================

let contadorCard = 0;


// =======================================
// RENDERIZAR CARDS
// =======================================

function renderizarCards() {

    const board =
        document.getElementById("board");

    const lateral =
        document.getElementById("lateral_botao");

    board.innerHTML = "";

    lateral.innerHTML = "";


    // ===================================
    // SEM PAINEL
    // ===================================

    if (!painelAtual) {

        board.innerHTML = `

        <h3 style="color:white;">
            Selecione um painel
        </h3>

        `;

        return;
    }


    // ===================================
    // BOTÃO ADD CARD
    // ===================================

    board.innerHTML += `

    <div id="caixa-botao-adicionar-card"
         style="text-align:center;">

        <button id="botao-adicionar-card"
                onclick="adicionarCard()">

            <i class="fa fa-plus fa-2x"
               aria-hidden="true"
               style="
                    color:white;
                    padding:10px;
               ">
            </i>

            <h5 style="
                    color:white;
                    padding:10px;
               ">

                Adicionar Card

            </h5>

        </button>

    </div>

    `;


    // ===================================
    // CARDS
    // ===================================

    painelAtual.cards.forEach(card => {

        board.innerHTML += `

        <div class="card bg-dark text-white"
             style="
                width:250px;
                height:460px;
                margin:10px;
                border:1px solid rgb(60,60,60);
                padding:10px;
             ">

            <img src="${card.imagem}"
                 class="card-img-top"
                 style="
                    height:150px;
                    object-fit:cover;
                 ">

            <div class="card-body">

                <h5>
                    ${card.nome}
                </h5>

                <p>
                    Preço de venda: R$ ${card.precoVenda}
                </p>

                <p>
                    Custo: R$ ${card.custo}
                </p>

                <p>
                    Lucro: R$ ${card.lucro}
                </p>

                <p>
                    Material:
                    ${card.materialNome}
                </p>

                <p>
                    Quantidade:
                    ${card.qtd_material}
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

    if (!painelAtual.materiais || painelAtual.materiais.length === 0) {

        alert("Cadastre um material primeiro");
        return;
    }

    const nome =
        prompt("Nome do card:");

    if (!nome) return;

    const imagem =
        prompt("URL da imagem:");

    const precoVenda =
        Number(prompt("Preço de venda:"));

    const materialId =
        Number(prompt("ID do material:"));

    const qtd_material =
        Number(prompt("Quantidade usada do material:"));

    const quantidadeMaxima =
        Number(prompt("Quantidade máxima de produção:"));



    // =========================
    // MATERIAL
    // =========================

    const material =
        painelAtual.materiais.find(
            m => m.idMaterial === materialId
        );

    if (!material) {

        alert("Material não encontrado");
        return;
    }



    // =========================
    // ESTOQUE SUFICIENTE
    // =========================

    const consumoTotal =
        qtd_material * quantidadeMaxima;

    if (consumoTotal > material.quantidadeMaterial) {

        alert(
            "Quantidade insuficiente no estoque!\n\n" +
            "Necessário: " + consumoTotal +
            "\nDisponível: " + material.quantidadeMaterial
        );

        return;
    }



    // =========================
    // CUSTO AUTOMÁTICO
    // =========================

    const custo =
        qtd_material * material.precoUnidade;



    // =========================
    // LUCRO
    // =========================

    const lucro =
        precoVenda - custo;



    // =========================
    // CARD
    // =========================

    const novoCard = {

        id: contadorCard,

        nome: nome,

        imagem: imagem,

        precoVenda: precoVenda,

        custo: custo,

        lucro: lucro,

        materialId: materialId,

        materialNome: material.nomeMaterial,

        qtd_material: qtd_material,

        quantidadeMaxima: quantidadeMaxima
    };



    painelAtual.cards.push(novoCard);



    // =========================
    // RESTRIÇÃO
    // =========================

    painelAtual.restricoes.push({

        cardId: contadorCard,

        nomeCard: nome,

        quantidadeMaxima: quantidadeMaxima
    });

    contadorCard++;

    renderizarCards();

    renderizarLimitacoes();
}


// =======================================
// DELETAR CARD
// =======================================

function deletarCard(id) {

    const indice =
        painelAtual.cards.findIndex(
            card => card.id === id
        );

    painelAtual.cards.splice(indice, 1);


    // REMOVE RESTRIÇÃO
    const indiceRestricao =
        painelAtual.restricoes.findIndex(
            r => r.cardId === id
        );

    if (indiceRestricao !== -1) {

        painelAtual.restricoes.splice(
            indiceRestricao,
            1
        );
    }

    renderizarCards();

    renderizarLimitacoes();
}


// =======================================
// INICIALIZAÇÃO
// =======================================

renderizarCards();