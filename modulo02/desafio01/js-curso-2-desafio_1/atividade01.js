function exibirSaudacao() {
    let mensagem = "Olá, mundo!";
    console.log(mensagem);
}

exibirSaudacao();

function saudacaoComNome(nome) {
    let mensagem = `Olá ${nome}!`;
    console.log(mensagem)
}

saudacaoComNome('Renan');

function dobro(numero) {
    let resultado = numero * 2;
    return `O dobro do numero ${numero} é: ${resultado}`
}

console.log(dobro(2));

function calcularMedia(n1, n2, n3) {
    let soma = n1 + n2 + n3;
    let media = soma / 3;
    return `A media das notas ${n1}, ${n2} e ${n3} é: ${media}`;
}

console.log(calcularMedia(7, 2, 10));

function maiorNumero(n1, n2) {
    let maior = n1 > n2 ? n1 : n2;
    console.log(`O maior numero entre ${n1} e ${n2} é: ${maior}`)
}

maiorNumero(2,3);

function multiplicar(n1) {
    let resultado = n1 * n1;
    console.log(`${n1} x ${n1} = ${resultado}`);
}

multiplicar(6);
