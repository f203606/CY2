document.getElementById('converter').addEventListener('click', function() {
    // Pega os valores inseridos
    let tempInput = parseFloat(document.getElementById('tempInput').value);
    let unidadeDe = document.getElementById('unidadeDe').value;
    let unidadePara = document.getElementById('unidadePara').value;

    if (isNaN(tempInput)) {
        alert("Por favor, insira um valor válido para a temperatura.");
        return;
    }

    // Calcula o resultado com base nas unidades selecionadas
    let resultado = converterTemperatura(tempInput, unidadeDe, unidadePara);

    // Exibe o resultado no campo de resultado
    document.getElementById('resultado').value = resultado;

    // Adiciona a conversão ao histórico
    adicionarHistorico(tempInput, unidadeDe, unidadePara, resultado);
});

document.getElementById('resetar').addEventListener('click', function() {
    // Limpa todos os campos
    document.getElementById('tempInput').value = '';
    document.getElementById('unidadeDe').value = 'celsius';
    document.getElementById('unidadePara').value = 'celsius';
    document.getElementById('resultado').value = '';
});

function converterTemperatura(temp, de, para) {
    // Converte a temperatura dependendo das unidades
    if (de === para) {
        return temp; // Se as unidades forem iguais, não há conversão
    }

    if (de === 'celsius') {
        if (para === 'fahrenheit') {
            return (temp * 9/5) + 32; // Celsius para Fahrenheit
        } else if (para === 'kelvin') {
            return temp + 273.15; // Celsius para Kelvin
        }
    }

    if (de === 'fahrenheit') {
        if (para === 'celsius') {
            return (temp - 32) * 5/9; // Fahrenheit para Celsius
        } else if (para === 'kelvin') {
            return (temp - 32) * 5/9 + 273.15; // Fahrenheit para Kelvin
        }
    }

    if (de === 'kelvin') {
        if (para === 'celsius') {
            return temp - 273.15; // Kelvin para Celsius
        } else if (para === 'fahrenheit') {
            return (temp - 273.15) * 9/5 + 32; // Kelvin para Fahrenheit
        }
    }
}

function adicionarHistorico(temp, de, para, resultado) {
    // Cria uma nova linha na tabela de histórico
    const tabelaHistorico = document.getElementById('historicoTabela');

    const novaLinha = tabelaHistorico.insertRow();
    
    // Adiciona as células com os valores das conversões
    const celulaTemp = novaLinha.insertCell(0);
    const celulaDe = novaLinha.insertCell(1);
    const celulaPara = novaLinha.insertCell(2);
    const celulaResultado = novaLinha.insertCell(3);

    celulaTemp.textContent = temp;
    celulaDe.textContent = de.charAt(0).toUpperCase() + de.slice(1); // Primeira letra maiúscula
    celulaPara.textContent = para.charAt(0).toUpperCase() + para.slice(1); // Primeira letra maiúscula
    celulaResultado.textContent = resultado;
}
