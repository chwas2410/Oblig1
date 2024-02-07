let billettArray = [];

function kjopBillett() {
    const filmNavn = document.getElementById('filmNavn').value;
    const antallBilletter = document.getElementById('antallBilletter').value;
    const forNavn = document.getElementById('forNavn').value;
    const etterNavn = document.getElementById('etterNavn').value;
    const epost = document.getElementById('epost').value;
    const telefon = document.getElementById('telefon').value;

    if (filmNavn && antallBilletter && forNavn && etterNavn && epost && telefon) {
        const billett = {
            filmNavn,
            antallBilletter,
            forNavn,
            etterNavn,
            epost,
            telefon
        };
        billettArray.push(billett);
        visBilletter();
        resetInputFields();
    } else {
        alert('Vennligst fyll ut alle felt.');
    }
}


function slettAlleBilletter() {
    billettArray = [];
    visBilletter();
}

function visBilletter() {
    const billettListe = document.getElementById('billettListe');
    billettListe.innerHTML = '';

    billettArray.forEach(billett => {
        const listItem = document.createElement('li');
        listItem.textContent = `Film: ${billett.filmNavn}, Antall: ${billett.antallBilletter}, Kunde: ${billett.forNavn} ${billett.etterNavn} , E-post: ${billett.epost}, Telefon: ${billett.telefon}`;
        billettListe.appendChild(listItem);
    });
}

function resetInputFields() {
    document.getElementById('filmNavn').value = '';
    document.getElementById('antallBilletter').value = '';
    document.getElementById('forNavn').value = '';
    document.getElementById('etterNavn').value = '';
    document.getElementById('epost').value = '';
    document.getElementById('telefon').value = '';
}