package br.edu.ifg.luziania.controller;

import br.edu.ifg.luziania.model.dto.AutenticacaoDTO;
import br.edu.ifg.luziania.model.dto.RetornoAutenticacaoDTO;
import io.quarkus.qute.Template;
import io.quarkus.qute.TemplateInstance;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("")
public class Login {

    private final io.quarkus.qute.Template login;

    public Login(io.quarkus.qute.Template login) {
        this.login = login;
    }

    @GET
    @Path("/bs-login")
    @Produces(MediaType.TEXT_HTML)
    public TemplateInstance get() {
        return login.instance();
    }

    // o que está abaixo faz apenas uma simplees verificação pra ver se o que o usuário digitou na tela de login é igual a email: felipehiohanif@gmail.com, senha: 1234567abc.
    // se realmente o que o usuário digitar for o que mencionei, então será retornado a mensagem 'usuário autenticado', caso contrário será retornado 'usuário não autenticado'.
    // essa mensagem retornada ('usuário autenticado' e 'usuário não autenticado') será usada no arquivo javascript de login 'login.js', localizado dentro da pasta 'js'.
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Path("/bs-cadastro")
    public Response autenticar(AutenticacaoDTO AutenticacaoDTO){
        RetornoAutenticacaoDTO retorno = new RetornoAutenticacaoDTO();
        if (br.edu.ifg.luziania.model.dto.AutenticacaoDTO.getEmail().equals("will@gmail.com") && AutenticacaoDTO.getSenha().equals("123")) {
            retorno.setMensagem("Usuário autenticado!");
            return Response.ok(retorno, MediaType.APPLICATION_JSON).build();
        }
        else {
            retorno.setMensagem("Usuário não autenticado!");
            return Response.ok(retorno, MediaType.APPLICATION_JSON).build();
        }
    }
}