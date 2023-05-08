
function validar_formulario(){
    return document.getElementById("email").value !== '' &&
        document.getElementById("senha").value !== '';
}

function autenticar(){
    if (validar_formulario()){
        var requisicao = criarRequisicao(document.getElementById("email").value,
            document.getElementById("senha").value);

        fetch(requisicao)
            .then((response) => {
                if (response.status === 200) {
                    return response.json();

                } else {
                    throw new Error("Ocorreu algum erro no servidor!");
                }
            })
            .then(json => {
                console.log(JSON.stringify(json));

                alert(json.mensagem);
                if (json.mensagem == 'Usuário autenticado!')
                    window.location.href = window.location.origin+'/bs-pagprin';
            });

    } else {
        alert('Os campos e-mail e senha são obrigatórios! Verifique o formulário.');
    }
}

// essa função prepara os dados que foram passados pela tela de login, estruturando eles na estrutura JSON e os enviando pelo método HTTP 'POST'
function criarRequisicao(email, senha){
    return new Request("/autenticar", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "email": email,
            "senha": senha
        }),
    });
}