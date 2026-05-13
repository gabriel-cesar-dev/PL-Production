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

    if (titulo.trim() === "") {

        alert("Digite um título");

        return;
    }

    const novoPainel = {

        id: contadorPainel,

        titulo: titulo,

        resumo: resumo,

        cards: []

    };

    paineis.push(novoPainel);

    contadorPainel++;

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
// RENDERIZAR PAINEIS
// =======================================

function renderizarPaineis() {

    const lista =
        document.getElementById("lista-paineis");

    lista.innerHTML = "";

    paineis.forEach(painel => {

        lista.innerHTML += `

        <div class="btn-group"
             style="padding: 3px; width: 100%;">

            <button type="button"
                    class="btn btn-dark border-0"
                    onclick="selecionarPainel(${painel.id})">

                ${painel.titulo}

            </button>

            <button type="button"
                    class="btn btn-dark dropdown-toggle dropdown-toggle-split border-0"
                    data-bs-toggle="dropdown">
            </button>

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
        paineis.find(painel => painel.id === id);

    renderizarCards();
}


// =======================================
// DELETAR PAINEL
// =======================================

function deletarPainel(id) {

    const indice =
        paineis.findIndex(painel => painel.id === id);

    paineis.splice(indice, 1);

    if (painelAtual?.id === id) {

        painelAtual = null;

        renderizarCards();
    }

    renderizarPaineis();
}