// primeira coisa a ser feita e remover o comportamento do 
//formulario de recarregar a tela.
/* para isso temos que selecionar o formulario,
criamos um constante usamos um id para chamar o formulario, 
logo a segui colocamos um console.log logando esse elemento. */






/*função para validar se o nome esta completo dentro dele */
function validaNome( nomeCompleto){
   const nomeComoArry = nomeCompleto.split(' ');
   return nomeComoArry.length >= 2;

}






const form = document.getElementById('form-deposito');
/* para remover esse comportamento temos que
alterar o evento de sumição do formulario. para isso colocamos o nome do elemento e uma função. */

form.addEventListener( "submit", function(e){
    let formEValido = false;
    e.preventDefault();

    const nomeBeneficiario = document.getElementById('nome-beneficiario');
    const numeroContaBeneficiario = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito');
    const mensagemSucesso= 'Montante de: ' ${valorDeposito.value} 'depositado para o cliente:  '${nomeBeneficiario.value}  'conta: '${numeroContaBeneficiario.value};


    formEValido = validaNome(nomeBeneficiario.value);
    if(formEValido){
        alert(mensagemSucesso);
    }
    else{
        
        alert('O nome não esta completo.');
    }

})
console.log(form);
