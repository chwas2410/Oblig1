const bestilling = [];
function kjopBillett() {
    const filmNavn = document.getElementById("filmNavn").value;
    const antallBilletter = document.getElementById("antallBilletter").value;
    const fornavn = document.getElementById("fornavn").value;
    const etternavn = document.getElementById("etternavn").value;
    const telefonnr = document.getElementById("telefonNr").value;
    const epost = document.getElementById("epost").value;

    // verdiene går gjennom validering

    //film
    if (filmNavn === "Velg film her") {
        document.getElementById("feilFilmNavn").textContent = " Velg en film";
    } else {
        document.getElementById("feilFilmNavn").textContent = "Velg film!";
    }
    //billetter
    if (!antallBilletter || isNaN(antallBilletter) || antallBilletter <= 0) {
        document.getElementById("feilAntallBilletter").textContent = "Skriv antall billettter";
    } else {
        document.getElementById("feilAntallBilletter").textContent = "";
    }
    //fornavn
    if (!fornavn) {
        document.getElementById("feilFornavn").textContent = "Fyll ut fornavn";
    } else {
        document.getElementById("feilFornavn").textContent = "";
    }
    //etternavn
    if (!etternavn) {
        document.getElementById("feilEtternavn").textContent = " Fyll ut etternavn";
    } else {
        document.getElementById("feilEtternavn").textContent = "";
    }
    //telefonnummer: https://stackoverflow.com/questions/73656999/regex-to-validate-only-digits-from-0-9-maximum-of-8-digits-till-a-dot-and-only
    if (!telefonnr || !/^[0-9]{8}$/.test(telefonnr)) {
        document.getElementById("feilTelefonNr").textContent = "Skriv inn et gyldig telefonnummer";
    } else {
        document.getElementById("feilTelefonNr").textContent = "";

    }
    //epost: https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript

    if (!epost || !/^[^\s*]+@[^\s@]+\.[^\s@]+$/.test(epost)) {
        document.getElementById("feilEpost").textContent = "Skriv inn en guldig epost";
    } else {
        document.getElementById("feilEpost").textContent = "";
    }

    // Sjekker om det er feil i valideringen
    if (document.getElementById("feilFilmNavn").textContent ||
        document.getElementById("feilAntallBilletter").textContent ||
        document.getElementById("feilFornavn").textContent ||
        document.getElementById("feilEtternavn").textContent ||
        document.getElementById("feilTelefonNr").textContent ||
        document.getElementById("feilEpost").textContent) {
        // Hvis det er feil, avbryt funksjonen uten å legge til billetten i arrayet
        return;
    }

//variabelene går inn i en billett
    const nyBillett = {
        Film: filmNavn,
        AntallBilletter: antallBilletter,
        Fornavn: fornavn,
        Etternavn: etternavn,
        Telefonnr: telefonnr,
        Epost: epost
    };

//billett blir lagt til i arrayet
    bestilling.push(nyBillett);
    output();

    document.getElementById("filmNavn").value = "Velg film her";
    document.getElementById("antallBilletter").value = "";
    document.getElementById("fornavn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("telefonNr").value = "";
    document.getElementById("epost").value = "";
    //variabelene går inn i en billett
    /*const nyBillett = {
        Film: filmNavn,
        AntallBilletter: antallBilletter,
        Fornavn: fornavn,
        Etternavn: etternavn,
        Telefonnr: telefonnr,
        Epost: epost
    };

    //billett blir lagt til i arrayet
    bestilling.push(nyBillett);
    output();*/
}
/*function output(){
    //billeten skrives ut
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML;
    bestilling.forEach(billett => {
        const billettInfo = `
            <p>
                Film: ${billett.Film}<br>
                Antall billetter: ${billett.AntallBilletter}<br>
                Fornavn: ${billett.Fornavn}<br>
                Etternavn: ${billett.Etternavn}<br>
                Telefonnr: ${billett.Telefonnr}<br>
                Epost: ${billett.Epost}
            </p>
        `;
        outputDiv.innerHTML += billettInfo;
    });

}*/
function output() {
    //billeten skrives ut
    const outputDiv = document.getElementById("output");

    // Tømmer innholdet i outputDiv før du legger til nye billetter
    outputDiv.innerHTML = "";

    bestilling.forEach(billett => {
        const billettInfo = `
            <p>
                Film: ${billett.Film}<br>
                Antall billetter: ${billett.AntallBilletter}<br>
                Fornavn: ${billett.Fornavn}<br>
                Etternavn: ${billett.Etternavn}<br>
                Telefonnr: ${billett.Telefonnr}<br>
                Epost: ${billett.Epost}
            </p>
        `;
        outputDiv.innerHTML += billettInfo;
    });
}
function slett() {
    bestilling.length = 0;
    output();

    // sletter teksten i boksene

    document.getElementById("filmNavn").value = "Velg film her";
    document.getElementById("antallBilletter").value = "";
    document.getElementById("fornavn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("telefonNr").value = "";
    document.getElementById("epost").value = "";

    //sletter billetten
    document.getElementById("output").innerHTML = ""
}
