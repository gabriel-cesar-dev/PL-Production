// =======================================
// CONTADOR
// =======================================

let contadorMaterial = 0;


// =======================================
// RENDERIZAR
// =======================================

function renderizarLimitacoes() {

    const area =
        document.getElementById("limitacao");

    area.innerHTML = "";


    // ===================================
    // BOTÃO MATERIAL
    // ===================================

    area.innerHTML += `

    <div style="padding:20px;">

        <button class="btn btn-danger w-100"
                onclick="adicionarMaterial()">

            Adicionar material

        </button>

    </div>

    `;


    // ===================================
    // SEM PAINEL
    // ===================================

    if (!painelAtual) {

        area.innerHTML += `

        <div style="
            color:white;
            padding:20px;
        ">

            Selecione um painel

        </div>

        `;

        return;
    }


    // ===================================
    // MATERIAIS
    // ===================================

    painelAtual.materiais.forEach(material => {

        area.innerHTML += `

        <div class="card bg-dark text-white"
             style="
                margin:10px;
                padding:10px;
                border:1px solid rgb(60,60,60);
             ">

            <h5>

                ${material.nomeMaterial}

            </h5>

            <p>

                ID:
                ${material.idMaterial}

            </p>

            <p>

                Estoque:
                ${material.quantidadeMaterial}

            </p>

            <p>
                Preço Unidade:
                R$ ${material.precoUnidade}
            </p>

            <button class="btn btn-danger"
                    onclick="deletarMaterial(${material.idMaterial})">

                Excluir

            </button>

        </div>

        `;
    });


    // ===================================
    // RESTRIÇÕES
    // ===================================

    painelAtual.restricoes.forEach(restricao => {

        area.innerHTML += `

        <div class="card bg-dark text-white"
             style="
                margin:10px;
                padding:10px;
                border:1px solid rgb(60,60,60);
             ">

            <p>

                Restrição:
                ${restricao.nomeCard}

            </p>

            <p>

                Máximo:
                ${restricao.quantidadeMaxima}

            </p>

        </div>

        `;
    });


    // ===================================
    // BOTÃO FO MAX
    // ===================================

    area.innerHTML += `

    <div style="padding:20px;">

        <button class="btn btn-success w-100"
                onclick="calcularFOMax()">

            Calcular FO Max

        </button>

    </div>

    `;
}


// =======================================
// ADICIONAR MATERIAL
// =======================================

function adicionarMaterial() {

    if (!painelAtual) {

        alert("Selecione um painel");

        return;
    }

    const nomeMaterial =
        prompt("Nome do material:");

    if (!nomeMaterial) return;

    const quantidadeMaterial =
        Number(prompt("Quantidade do material:"));

    const precoUnidade =
        Number(prompt("Preço por unidade do material:"));


    const novoMaterial = {

        idMaterial: contadorMaterial,

        nomeMaterial: nomeMaterial,

        quantidadeMaterial: quantidadeMaterial,

        precoUnidade: precoUnidade
    };


    painelAtual.materiais.push(novoMaterial);

    contadorMaterial++;

    renderizarLimitacoes();
}


// =======================================
// DELETAR MATERIAL
// =======================================

function deletarMaterial(id) {

    const indice =
        painelAtual.materiais.findIndex(
            material =>
                material.idMaterial === id
        );

    painelAtual.materiais.splice(indice, 1);

    renderizarLimitacoes();
}


// =======================================
// FO MAX
// =======================================

function calcularFOMax() {

    if (!painelAtual) {

        alert("Selecione um painel");
        return;
    }

    if (painelAtual.cards.length === 0) {

        alert("Sem cards");
        return;
    }

    let melhorLucro = 0;

    let melhorCard = null;



    painelAtual.cards.forEach(card => {

        const lucroTotal =
            card.lucro * card.quantidadeMaxima;

        if (lucroTotal > melhorLucro) {

            melhorLucro = lucroTotal;

            melhorCard = card;
        }
    });



    if (!melhorCard) {

        alert("Nenhum resultado");
        return;
    }



    alert(

        "===== FO MAX =====\n\n" +

        "Produto: " +
        melhorCard.nome +

        "\n\nLucro unitário: R$ " +
        melhorCard.lucro +

        "\n\nQuantidade máxima: " +
        melhorCard.quantidadeMaxima +

        "\n\nLucro máximo: R$ " +
        melhorLucro
    );
}


// =======================================
// INICIALIZAÇÃO
// =======================================

renderizarLimitacoes();