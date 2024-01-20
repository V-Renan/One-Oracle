alert('Boas vindas ao jogo do numero secreto!');
let numeroSecreto = 9;
let resposta;
let cont = 0;

while (resposta != numeroSecreto) {
    resposta = prompt('Escolha um numero entre 1 e 10');
    cont ++;

    if (resposta == numeroSecreto) {
        alert(`Isso ai! Voce descobriu o numero secreto ${numeroSecreto}.\nVoce acertou em ${cont} tentativa(s)!`);
    } else {
        if (resposta > numeroSecreto) {
            alert(`O numero secreto é menor que ${resposta}`);
        } else {
            alert(`O numero secreto é maior que ${resposta}`);
        }
    }
}