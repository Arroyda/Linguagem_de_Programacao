function add(event) {
    event.preventDefault(); // evita o reload da página ao enviar o formulário

    const nome = document.getElementById('nomeTarefa').value.trim();
    const nota = document.getElementById('notaTarefa').value.trim();

    if (nome !== '' && nota !== '') {
        const novaTarefa = document.createElement('li');
        novaTarefa.textContent = `${nome} - Nota Máxima: ${nota}`;

        document.getElementById('listaTarefas').appendChild(novaTarefa);

        // limpa os campos
        document.getElementById('formTarefa').reset();
        document.getElementById('nomeTarefa').focus();
    }
}