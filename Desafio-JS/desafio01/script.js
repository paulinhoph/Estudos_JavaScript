 var endereco = {
        nome:'Paulo Henrique ',
        rua: 'Estrada do Itarare',
        numero: 1051,
        bairro: 'Ramos',
        cidade: 'Rio de Janeiro',
        uf: 'RJ',
        cep:  21061240,
    };

    function sla(endereco) {
       
        return('  Seu nome e: ' + endereco.nome +' <br><br>  O usuário mora em:    ' + endereco.cidade+' / '+ endereco.uf + ' <br><br> Bairro :   ' + endereco.bairro + ' <br><br>  Rua:   ' + endereco.rua + ' <br><br>   Nº:    ' + endereco.numero + '<br><br> Cep :  ' + endereco.cep  );
    }  


    document.write(sla(endereco));

    // alert(sla(endereco));

    // console.log(sla(endereco));


