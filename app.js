let listaDeNumerosSorteados = [];
let tentativas = 1;
let numeroSus = numeroSecreto();

function criarTexto(tag, texto){
    let titulo = document.querySelector(tag);
    titulo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

fraseInicial();

function fraseInicial(){
criarTexto('h1', 'Bem vindo ao jogo do número secreto');
criarTexto('p', 'Digite um número para começar o jogo');
}

function numeroSecreto(){
    if (listaDeNumerosSorteados.length >= 10) {
        listaDeNumerosSorteados = [];
    }
    let numeroEscolhido;
    do {
        numeroEscolhido = parseInt(Math.random() * 10 + 1);
    } while (listaDeNumerosSorteados.includes(numeroEscolhido));
    listaDeNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;
} 

function apagar(tag){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSus = numeroSecreto();
    apagar();
    tentativas = 1;
    fraseInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute==numeroSus){
        let tentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        criarTexto('p', `Parabéns você adivinhou o número secreto em ${tentativas} ${tentativa}`);
        criarTexto('h1', 'ACERTOU!!');
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute<numeroSus){
        criarTexto('p', 'O número secreto é maior'); 
    }else{
        criarTexto('p', 'O número secreto é menor'); 
    }
    tentativas++;
    apagar();
    }
}

