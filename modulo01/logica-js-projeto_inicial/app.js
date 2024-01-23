alert('Boas vindas ao jogo do numero secreto!');
let numeroMaximo = 10;
let numeroSecreto = parseInt (Math.random() * numeroMaximo + 1);
let resposta;
let cont = 0;

while (resposta != numeroSecreto) {
    resposta = prompt(`Escolha um numero entre 1 e ${numeroMaximo}`);
    cont ++;

    if (resposta == numeroSecreto) {
        break;
    } else {
        if (resposta > numeroSecreto) {
            alert(`O numero secreto é menor que ${resposta}`);
        } else {
            alert(`O numero secreto é maior que ${resposta}`);
        }
    }
}

let palavraTentaviva = cont > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Voce descobriu o numero secreto ${numeroSecreto}.\nVoce acertou em ${cont} ${palavraTentaviva}.`);