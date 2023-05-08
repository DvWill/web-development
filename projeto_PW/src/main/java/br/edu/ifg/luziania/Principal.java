package br.edu.ifg.luziania;

import io.quarkus.qute.Template;
import io.quarkus.qute.TemplateInstance;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("")
public class Principal {
    private final Template principal;

    public Principal(Template principal){
        this.principal = principal;
    }

    @GET
    @Produces(MediaType.TEXT_HTML)
    @Path("/bs-pagprin")
    public TemplateInstance principal(){
        return principal.instance();
    }
}
