package br.edu.ifg.luziania.model.dto;

public class AutenticacaoDTO {
    private static String email;
    private String senha;

    public static String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }
}
