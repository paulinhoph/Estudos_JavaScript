function sla (user){
    for (var habi of user){
        document.write(' <br> O ' + habi.nome + '  possui as habilidades: ' + habi.habilidades.join());
        }
    };
    var usuarios = [
{
        nome: 'Paulo',
        habilidades: ['Javascript', 'React', 'Html5','Css3']
    },
{
        nome: 'Paulo',
        habilidades: ['VueJS', 'React Native', 'Python']
 }
];

    var teste = sla(usuarios);