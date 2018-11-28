 
var numeros = 1;
    function pares(x, y) {
        for (var i = x; i <= y; i++) {
            if (i % 2 == 0) {
                document.write(i);
                numeros++;
            };
        };

    };

    pares( 0,100);
    document.write('<br><br>Foram impressos '+ numeros /n +'<br><br> números pares.');
    // console.log('Foram impressos '+ contador +' números pares.');
