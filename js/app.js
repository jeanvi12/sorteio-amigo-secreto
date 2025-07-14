let listaAmigos = [];
function adicionar() {
    let amigo = document.getElementById('nome-amigo').value.trim();
    if (amigo === '') {
        alert('Por favor, adicione um nome válido.');
        return;
    }
    if (listaAmigos.includes(amigo)) {
        alert('Não é possível adicionar o mesmo nome mais de uma vez.\nPor favor, adicione um nome diferente.');
        document.getElementById('nome-amigo').value = '';
        return;
    }
    listaAmigos.push(amigo);
    document.getElementById('lista-amigos').textContent = listaAmigos.join(', ');
    document.getElementById('nome-amigo').value = '';
}


function sortear() {
    if (listaAmigos.length < 4) {
        alert('Adicione pelo menos 4 amigos para realizar o sorteio.');
        return;
    }
    embaralha(listaAmigos);
    let listaSorteada = document.getElementById('lista-sorteio');
    let resultado = '';

    for (let i = 0; i < listaAmigos.length; i++) {
        let amigoAtual = listaAmigos[i];
        let amigoSorteado = listaAmigos[(i + 1) % listaAmigos.length];
        resultado += amigoAtual + ' --> ' + amigoSorteado + '<br>';
    }

    listaSorteada.innerHTML = resultado;
}


function reiniciar() {
    listaAmigos = [];
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').innerHTML = '';
    document.getElementById('nome-amigo').value = '';
}


// Utiliza o algoritmo de Fisher-Yates para embaralhar a lista
function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] =
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}