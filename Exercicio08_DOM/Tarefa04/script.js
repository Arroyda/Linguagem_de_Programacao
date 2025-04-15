function calcular(operacao) {
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);
    let resultado;
    let textoOperacao;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Preencha os dois números corretamente!");
        return;
    }

    switch (operacao) {
        case 'soma':
            resultado = num1 + num2;
            textoOperacao = `${num1} + ${num2} = ${resultado}`;
            break;
        case 'subtracao':
            resultado = num1 - num2;
            textoOperacao = `${num1} - ${num2} = ${resultado}`;
            break;
        case 'multiplicacao':
            resultado = num1 * num2;
            textoOperacao = `${num1} × ${num2} = ${resultado}`;
            break;
        case 'divisao':
            if (num2 === 0) {
                alert("Divisão por zero não é permitida.");
                return;
            }
            resultado = num1 / num2;
            textoOperacao = `${num1} ÷ ${num2} = ${resultado.toFixed(2)}`;
            break;
    }

    // Adiciona na lista
    const li = document.createElement('li');
    li.textContent = textoOperacao;
    document.getElementById('listaCalc').appendChild(li);

    // (opcional) Limpa os inputs
    document.getElementById('formCalculadora').reset();
    document.getElementById('number1').focus();
}
