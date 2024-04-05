package com.example.idk;


public class Order {
    private String film;
    private int antallBilletter;
    private String fornavn;
    private String etternavn;
    private String telefonNr;
    private String epost;

    // Constructor
    public Order(String film, int antallBilletter, String fornavn, String etternavn, String telefonNr, String epost) {
        this.film = film;
        this.antallBilletter = antallBilletter;
        this.fornavn = fornavn;
        this.etternavn = etternavn;
        this.telefonNr = telefonNr;
        this.epost = epost;
    }

    // Getters and setters (or access methods)
    public String getFilm() {
        return film;
    }

    public void setFilm(String film) {
        this.film = film;
    }

    public int getAntallBilletter() {
        return antallBilletter;
    }

    public void setAntallBilletter(int antallBilletter) {
        this.antallBilletter = antallBilletter;
    }

    public String getFornavn() {
        return fornavn;
    }

    public void setFornavn(String fornavn) {
        this.fornavn = fornavn;
    }

    public String getEtternavn() {
        return etternavn;
    }

    public void setEtternavn(String etternavn) {
        this.etternavn = etternavn;
    }

    public String getTelefonNr() {
        return telefonNr;
    }

    public void setTelefonNr(String telefonNr) {
        this.telefonNr = telefonNr;
    }

    public String getEpost() {
        return epost;
    }

    public void setEpost(String epost) {
        this.epost = epost;
    }
}
