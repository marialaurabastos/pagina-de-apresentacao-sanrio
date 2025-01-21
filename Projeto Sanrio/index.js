//modo escuro
document.getElementById("toggle-mode").addEventListener("click", () => { //evento de clicar no botão 
    const body = document.body;
    const icon = document.getElementById("mode-icon");

    // alterna a classe "modo-noturno" no corpo
    body.classList.toggle("modo-noturno");

    // atualiza o ícone com base no modo atual
    if (body.classList.contains("modo-noturno")) {
        // Modo escuro
        icon.src = "Imagens/modo-claro.png";  // altere para o ícone do modo escuro
        icon.alt = "Modo Claro";  // texto alternativo para acessibilidade
    } else {
        // Modo claro
        icon.src = "Imagens/modo-escuro.png";  // altere para o ícone do modo claro
        icon.alt = "Modo Escuro";  // texto alternativo para acessibilidade
    }
});

//funcionalidade da barra de pesquisa
document.addEventListener("DOMContentLoaded", function () {
    let inputElement = document.querySelector("#pesquisa");
    let listElement = document.querySelector("#lista");
    let itemElements = listElement.querySelectorAll(".personagem");

    inputElement.addEventListener("input", function (e) {
        let inputed = e.target.value.toLowerCase(); // obtém o valor do campo de pesquisa e transforma em minúsculas
        let matchingItems = []; // itens que correspondem à pesquisa
        let nonMatchingItems = []; // itens que não correspondem à pesquisa

        itemElements.forEach(function (li) {
            let text = li.querySelector("span").textContent.toLowerCase(); // obtém o nome do personagem, que está em <span>

            if (text.includes(inputed)) {
                li.style.visibility = "visible"; // exibe o item se o nome contiver o que foi digitado
                li.style.opacity = "1"; // garante que o item seja visível
                matchingItems.push(li); // armazena os itens correspondentes
            } else {
                li.style.visibility = "hidden"; // esconde o item, mas ainda ocupa espaço
                li.style.opacity = "0"; // torna o item invisível
                nonMatchingItems.push(li); // armazena os itens não correspondentes
            }
        });

        // primeiro, limpar a lista original
        listElement.innerHTML = "";

        // adiciona os itens que correspondem à pesquisa no topo
        matchingItems.forEach(function (item) {
            listElement.appendChild(item); // adiciona ao final (no topo)
        });

        // adiciona os itens que não correspondem à pesquisa após os itens filtrados
        nonMatchingItems.forEach(function (item) {
            listElement.appendChild(item); // adiciona os não filtrados abaixo
        });
    });
});

// mudar o ícone de cada personagem ao passar o mouse
document.addEventListener('DOMContentLoaded', function () {

    // função para alterar as imagens ao passar o mouse
    function changeImageOnHover(elementId, img1, img2) {
        const image = document.getElementById(elementId);

        image.addEventListener('mouseover', () => {
            image.src = img2;
        });

        image.addEventListener('mouseout', () => {
            image.src = img1;
        });
    }

    // alteração de imagens
    changeImageOnHover('kitty', 'Imagens/hello-kitty.png', 'Imagens/hello-kitty2.png');
    changeImageOnHover('melody', 'Imagens/my-melody.png', 'Imagens/my-melody2.png');
    changeImageOnHover('kuromi', 'Imagens/kuromi.png', 'Imagens/kuromi2.png');
    changeImageOnHover('cinamon', 'Imagens/cinamon.png', 'Imagens/cinamon2.png');
    changeImageOnHover('pompom', 'Imagens/pompompurin.png', 'Imagens/pompompurin2.png');
    changeImageOnHover('kero', 'Imagens/keroppi.png', 'Imagens/keroppi2.png');
});
