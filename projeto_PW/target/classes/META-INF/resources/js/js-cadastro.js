function validar_formulario(){
    return document.getElementById("emailU").value !== '' &&
        document.getElementById("senhaUsuario").value !== '';
}
function cadastrar(){
    // primeiro é verificado se o usuário deixou algum campo em branco com aquela função 'validar_formulario'.
    // se o usuário deixar algum campo em branco, um alerta informando 'os campos email e senha são obrigatórios' será mostrado
    if (validar_formulario()){
        // se todos os campos estiverem preenchidos, iremos criar uma requisição ao servidor para armazenar as informações que foram passadas.
        let requisicao = criarRequisicao(
            document.getElementById("nameUsuario").value,
            document.getElementById("emailUsuario").value,
            document.getElementById("senhaUsuario").value,
            document.getElementById("adm").value
        );

        // logo em seguida, iremos esperar a resposta do servidor sobre a situação dessa requisição (se deu tudo certo ou não).
        fetch(requisicao)
            .then((response) => {
                // aqui verificaremos se a resposta do servidor foi 200 (que significa: 'deu tudo certo') e logo em seguida retornamos a mensagem contendo as credenciais do usuário.
                if (response.status === 200) {
                    return response.json();

                    // caso contrário, aparecerá um erro.
                } else {
                    throw new Error("Ocorreu algum erro no servidor!");
                }
            })
            .then(json => {
                // essa mensagem retornada (que é as credenciais ou "e-mail já cadastrado") será então mostrada no front end pelo 'console.log'.
                // de acordo com a mensagem, decidiremos o que será feito da seguinte forma: caso a mensagem seja as credenciais (o que signigica que o email é válido) iremos transportar o usuário para a página principal, caso contrário, o usuário continuará na página de cadastro e terá que informar um email válido dessa vez pra continuar.
                // vale lembrar que a mensagem "e-mail já cadastrado" só será mostrada caso o usuário informe um email que já foi usado
                console.log(JSON.stringify(json));

                if (json.mensagem==="e-mail já cadastrado") {
                    alert(json.mensagem);

                }
                else {
                    window.location.href = window.location.origin + '/bs-login';
                }
            });

    } else {
        alert('Os campos e-mail e senha são obrigatórios! Verifique o formulário.');
    }
}

// essa função prepara os dados que foram passados pela tela de login, estruturando eles na estrutura JSON e os enviando pelo método HTTP 'POST'
function criarRequisicao(email, senha, adm){
    return new Request("/bs-login", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "email": email,
            "senha": senha,
            "adm": adm
        }),
    });
}
