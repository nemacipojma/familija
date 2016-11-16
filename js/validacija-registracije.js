$(document).ready(function () {
    $("#btnValidacija").click(function () {
        var ime = $('input[id="ime"]').val();
        var prezime = $('input[id="prezime"]').val();
        var username = $('input[id="username"]').val();
        var email = $('input[id="email"]').val();
        var sifra = $('input[id="password"]').val();

        if ($.trim(email).length == 0 || $.trim(ime).length == 0 || $.trim(prezime).length == 0
            || $.trim(username).length == 0 || sifra.length == 0) {
            alert("Unesite sve podatke!");
            return false;
        } else if (validateEmail(email)) {
            if (sifra.length >= 5) {
                if ($('input[type="checkbox"]:checked').length > 0) {
                    alert("Uspesna prijava!");
                    return true;
                } else {
                    alert("Morate da prihvatite uslove koriscenja!");
                    return false;
                }
            } else {
                alert("Sifra mora da sadrzi najmanje 5 karaktera!");
                return false;
            }
        } else {
            alert("Greska pri unosu email-a.");
            return false;
        }
    });
});

function validateEmail (sEmail) {
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (filter.test(sEmail))
        return true;
    else
        return false;
}

