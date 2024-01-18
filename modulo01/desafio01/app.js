alert('Boas vindas ao nosso site!');

let nome = 'Lua';
let idade = 25;
let numeroDeVendas = 50; 
let saldoDisponivel = 1000;
let mensagemDeErro = 'Erro! Preencha todos os campos.';

alert(mensagemDeErro);

nome = prompt('Digite seu nome: ');
idade = prompt('Digite sua idade: ');

if (idade >= 18 ) {
    let habilitacao = 'Voce pode tirar a habilitacao!';
    alert(nome + ' ' + habilitacao);
} else {
    let habilitacao = 'Voce ainda nao pode tirar a habilitacao!';
    alert(nome + ' ' + habilitacao);
}