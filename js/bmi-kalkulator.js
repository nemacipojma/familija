$(document).ready(function () {

    $("#izracunaj").on('click', function () {


        var tezina = $('input[id="tezina"]').val();
        var visina = $('input[id="visina"]').val();

        var racun = Math.round((tezina/(visina/100*visina/100))) ;
        document.bmiForm.bmi.value = racun;

        if(racun < 18.5){
            document.bmiForm.poruka.value = "Previse ste mrsavi."
        }
        if(racun > 18.5 && racun < 25){
            document.bmiForm.poruka.value = "Vi ste normalne tezine."
        }
        if(racun > 25){
            document.bmiForm.poruka.value = "Gojazni ste."
        }

    });
});