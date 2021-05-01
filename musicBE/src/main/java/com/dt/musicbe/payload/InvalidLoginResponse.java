package com.dt.musicbe.payload;


public class InvalidLoginResponse {

    private String invalidLogin;

    public InvalidLoginResponse(String invalidLogin) {
        this.invalidLogin = invalidLogin;
    }

    public InvalidLoginResponse() {
    }

    public String getInvalidLogin() {
        return invalidLogin;
    }

    public void setInvalidLogin(String invalidLogin) {
        this.invalidLogin = invalidLogin;
    }


}
