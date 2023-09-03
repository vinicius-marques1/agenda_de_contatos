const form = document.getElementById('form-contatos');
const contatos = [];
const telefones = [];


form.addEventListener('submit', function(event) {

    event.preventDefault();
    adicionaLinha();
})

function adicionaLinha() {

    const inputNome = document.getElementById('nome-contato');
    const inputTelefone = document.getElementById('telefone-contato');

    if (telefones.includes(inputTelefone.value)) {
        alert(`O telefone ${inputTelefone.value} já foi inserido!`)
    } else {
        contatos.push(inputNome.value);
        telefones.push(inputTelefone.value);
    
        let linha = 
        `<tr>
        <td>${inputNome.value}</td>
        <td>${inputTelefone.value}</td>
        </tr>`;
    
        const corpoTabela = document.querySelector('tbody');
        corpoTabela.innerHTML += linha;
    }

    // Limpando os campos
    inputNome.value = '';
    inputTelefone.value = '';
}
