const dados_card = [];

// -------
// Adicionar o OnClick na função que precisa
// -------

// Controle da array
let contador_id = 0;
let contador_id_custo = [];

function adicionar_custo(){
    const nome // Depois coloque o item do HTML;
    const quantidade // Depois coloque o item do HTML;

    return{
        nome,
        quantidade,
    }
}

function deletar_custo(indice, indice_custo){
    dados_card[indice].custos.splice(indice_custo,1);
}

function modificar_custo(indice, indice_custo){
    const novo_nome;  // Depois coloque o item do HTML
    const nova_quantidade;  // Depois coloque o item do HTML 

    dados_card[indice].custos[indice_custo].nome = novo_nome;
    dados_card[indice].custos[indice_custo].quantidade = nova_quantidade;
}

function adicionar_card(){
    contador_id_custo[contador_id] = 0;

    const nome;  // Depois coloque o item do HTML
    const img;  // Depois coloque o item do HTML
    const custo_monetario;  // Depois coloque o item do HTML
    const lucro_monetario;  // Depois coloque o item do HTML

    dados_card.push({
        id: contador_id,
        nome: nome,
        img: img,
        custo_monetario: custo_monetario,
        lucro_monetario: lucro_monetario,

        custos: [
            adicionar_custo(),
            contador_id_custo[contador_id]++
        ]
    });
    
    contador_id++;
}

function deletar_card(indice){
    dados_card.splice(indice, 1);
}

function modificar_card(indice, indice_custo){
    const novo_nome;  // Depois coloque o item do HTML
    const nova_img;  // Depois coloque o item do HTML;
    const novo_custo;  // Depois coloque o item do HTML;
    const novo_lucro;  // Depois coloque o item do HTML;

    dados_card[indice].nome = novo_nome;
    dados_card[indice].img = nova_img;
    dados_card[indice].custo_monetario = novo_custo;
    dados_card[indice].lucro_monetario = novo_lucro;
}
