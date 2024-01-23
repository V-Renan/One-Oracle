let listaNumeros = [];
let qtdNumeros = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 0;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${qtdNumeros}`);
}

exibirMensagemInicial();

function verificarChute() {
    tentativas++;

    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let PalavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagem = `Voce descobriu o número secreto com ${tentativas} ${PalavraTentativa}!`;
        exibirTextoNaTela('p', mensagem);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
    }
    limparCampo();
}

function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * qtdNumeros + 1);
   let quantidadeElementosLista = listaNumeros.length;

   if (quantidadeElementosLista == qtdNumeros) {
        listaNumeros = [];
   }

   if (listaNumeros.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
   } else {
    listaNumeros.push(numeroEscolhido);
        return numeroEscolhido;
   }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 0;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}