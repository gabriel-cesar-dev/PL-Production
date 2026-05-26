// =======================================
// DADOS DOS PAINEIS
// =======================================

const paineis = [];

let painelAtual = null;

let contadorPainel = 0;


// =======================================
// ADICIONAR PAINEL
// =======================================

function adicionarPainel() {

    const titulo =
        document.getElementById("titulo-painel").value;

    const resumo =
        document.getElementById("resumo-painel").value;


    // ===================================
    // VALIDAÇÃO
    // ===================================

    if (titulo.trim() === "") {

        alert("Digite um título");

        return;
    }


    // ===================================
    // NOVO PAINEL
    // ===================================

    const novoPainel = {

        id: contadorPainel,

        titulo: titulo,

        resumo: resumo,

        // LISTA DOS CARDS
        cards: [],

        // LISTA DOS MATERIAIS
        materiais: [],

        // LISTA DAS RESTRIÇÕES
        restricoes: []
    };


    // ===================================
    // SALVAR
    // ===================================

    paineis.push(novoPainel);

    contadorPainel++;


    // ===================================
    // RENDERIZAR
    // ===================================

    renderizarPaineis();

    limparModalPainel();
}


// =======================================
// LIMPAR MODAL
// =======================================

function limparModalPainel() {

    document.getElementById("titulo-painel").value = "";

    document.getElementById("resumo-painel").value = "";
}


// =======================================
// RENDERIZAR PAINÉIS
// =======================================

function renderizarPaineis() {

    const lista =
        document.getElementById("lista-paineis");

    lista.innerHTML = "";


    // ===================================
    // SEM PAINEL
    // ===================================

    if (paineis.length === 0) {

        lista.innerHTML = `

        <div style="
            color:white;
            text-align:center;
            padding:20px;
        ">

            Nenhum painel criado

        </div>

        `;

        return;
    }


    // ===================================
    // LISTA DOS PAINÉIS
    // ===================================

    paineis.forEach(painel => {

        lista.innerHTML += `

        <div class="btn-group"
             style="
                padding:3px;
                width:100%;
             ">

            <!-- BOTÃO PRINCIPAL -->
            <button type="button"
                    class="btn btn-dark border-0"

                    onclick="selecionarPainel(${painel.id})">

                ${painel.titulo}

            </button>


            <!-- DROPDOWN -->
            <button type="button"

                    class="btn btn-dark dropdown-toggle dropdown-toggle-split border-0"

                    data-bs-toggle="dropdown">

            </button>


            <!-- MENU -->
            <ul class="dropdown-menu dropdown-menu-dark">

                <li>

                    <button class="dropdown-item"

                            onclick="deletarPainel(${painel.id})">

                        Excluir

                    </button>

                </li>

            </ul>

        </div>

        `;
    });
}


// =======================================
// SELECIONAR PAINEL
// =======================================

function selecionarPainel(id) {

    painelAtual =
        paineis.find(
            painel => painel.id === id
        );


    // ===================================
    // GARANTIAS DE SEGURANÇA
    // ===================================

    if (!painelAtual.cards) {

        painelAtual.cards = [];
    }

    if (!painelAtual.materiais) {

        painelAtual.materiais = [];
    }

    if (!painelAtual.restricoes) {

        painelAtual.restricoes = [];
    }


    // ===================================
    // RENDERIZAR
    // ===================================

    renderizarCards();

    renderizarLimitacoes();
}


// =======================================
// DELETAR PAINEL
// =======================================

function deletarPainel(id) {

    const indice =
        paineis.findIndex(
            painel => painel.id === id
        );


    // ===================================
    // REMOVE
    // ===================================

    paineis.splice(indice, 1);


    // ===================================
    // SE ERA O PAINEL ATUAL
    // ===================================

    if (painelAtual?.id === id) {

        painelAtual = null;

        renderizarCards();

        renderizarLimitacoes();
    }


    // ===================================
    // ATUALIZA LISTA
    // ===================================

    renderizarPaineis();
}


// =======================================
// INICIALIZAÇÃO
// =======================================

renderizarPaineis();