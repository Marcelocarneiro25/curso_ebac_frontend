function validateForm() {
    
    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);

    
    const messageDiv = document.getElementById('message');


    if (campoB > campoA) {
        messageDiv.textContent = 'Formulário válido! Obrigado por enviar.';
        messageDiv.className = 'message success';
    } else {
        messageDiv.textContent = 'Erro: Campo B deve ser maior que Campo A.';
        messageDiv.className = 'message error';
    }
}