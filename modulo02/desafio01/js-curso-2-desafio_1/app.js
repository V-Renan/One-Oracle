let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function botaoConsole() {
    console.log('O botao foi clicado!');
}

function botaoAlerta() {
    alert('Eu amo JS!');
}

function botaoCidade() {
    let cidade = prompt('Me fale o nome de uma cidade do Brasil:');
    alert(`Estive em ${cidade} e lembrei de voce!`);
}

function botaoSoma() {
    let n1 = parseInt (prompt('Digite o primeiro numero:'));
    let n2 = parseInt (prompt('Digite o segundo numero:'));
    let soma = n1 + n2;
    alert(`A soma de ${n1} + ${n2} resulta em: ${soma}`);
}