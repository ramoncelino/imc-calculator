// Capturar Evento de Submit do Formulário do HTML

const form = document.querySelector('#form'); // # porque se trata de um ID

form.addEventListener('submit', function (event) { // Adicionamos um evento no formulário = submit

    event.preventDefault(); // Prevenimos o default
    const inputPeso = event.target.querySelector('#peso'); // Captura de Dados do input
    const inputAltura = event.target.querySelector('#altura'); // Captura de Dados do input

    const peso = Number(inputPeso.value); // Conversão dos input em 'number'
    const altura = Number(inputAltura.value); // Conversão dos input em 'number'

    if (!peso) { // Caso o input peso seja um NaN
        setResult('Peso Inválido', false); // flag false para colocar estilo css
        return;
    }

    if (!altura) { // Caso o input altura seja um NaN
        setResult('Altura Inválida', false); // flag false para colocar estilo css
        return;
    }

    const imc = getImc(peso, altura); // Deve-se criar a função imc com os parâmetros peso e altura
    const valorImc = getValorImc(imc);

    const message = `Seu IMC é ${imc} (${valorImc}).`;

    setResult(message, true); // Resultado com flag css

});

function getImc(peso, altura) {  // Criação da função imc
    const imc = peso / (altura ** 2);
    return imc.toFixed(2); // A função toFixed serve para casas decimais

}

function getValorImc(imc) {
    const valor = ['Abaixo do Peso', 'Peso Normal', 'Sobrepeso', 'Obesidade Grau I', 'Obesidade Grau II', 'Obesidade Grau III']; // Array com strings de nível de IMC

    if (imc >= 39.9) return valor[5]; // Checagem de trás pra frente, pois a medida que a função encontrar a palavra return, ela não será mais executada
    if (imc >= 34.9) return valor[4];
    if (imc >= 29.9) return valor[3];
    if (imc >= 24.9) return valor[2];
    if (imc >= 18.5) return valor[1];
    if (imc < 18.5) return valor[0];
}

function criaP() { // Função para criação de um parágrafo, faz a diferença em códigos grandes para depuração de erro
    const p = document.createElement('p');
    return p;
}

function setResult(message, isValid) { // Função que seta o resultado, que recebe a 'message' e verifica se o resultado é válido
    const resultado = document.querySelector('#result'); // Seleciona a #div 'result' 
    resultado.innerHTML = ''; // zera o HTML do result
    const p = criaP(); // cria um parágrafo

    if (isValid) { // checagem se a flag foi enviada como true or false
        p.classList.add('paragrafo-resultado'); // caso for verdadeira, fundo verde css
    }

    else {
        p.classList.add('bad'); // se for false, fundo vermelho css
    }

    p.innerHTML = message; // seta o innerHTML como a mensagem que estamos recebendo
    result.appendChild(p); // Adiciona o parágrafo no nosso resultado


}
