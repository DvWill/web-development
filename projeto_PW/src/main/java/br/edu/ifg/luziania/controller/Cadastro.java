package br.edu.ifg.luziania.controller;

import br.edu.ifg.luziania.model.dto.AutenticacaoDTO;
import br.edu.ifg.luziania.model.dto.RetornoAutenticacaoDTO;
import io.quarkus.qute.TemplateInstance;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("")
public class Cadastro {

    private final io.quarkus.qute.Template cadastro;

    public Cadastro(io.quarkus.qute.Template cadastro) {
        this.cadastro = cadastro;
    }

    @GET
    @Path("/")
    @Produces(MediaType.TEXT_HTML)
    public TemplateInstance get() {
        return cadastro.instance();
    }


    // abaixo, é feito verificado se o email colocado no cadastro já está em uso ou não, se não tiver, o cadastro é realizado.
    // quando o cadastro é realizado, uma resposta é retornada informando as credenciais cadastradas (se o email já estiver em uso, a resposta retornará "e-mail já cadastrado" invés das credenciais).
    // os dados retornados (credenciais ou a mensgaem "e-mail já cadastrado") serão usadas pelo arquivo javascript 'cadastrar.js'.
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Path("/bs-login")
    public Response cadastrar(AutenticacaoDTO user){
        RetornoAutenticacaoDTO retorno = new RetornoAutenticacaoDTO();
        if (user!=null){
            if (user.getEmail().equals("williammurciacosta17@gmail.com")){
                retorno.setMensagem("e-mail já cadastrado");
                return Response.ok(retorno, MediaType.APPLICATION_JSON).build();
            }
            return Response.ok(user, MediaType.APPLICATION_JSON).build();
        }
        return Response.status(Response.Status.NOT_FOUND).build();
    }
}