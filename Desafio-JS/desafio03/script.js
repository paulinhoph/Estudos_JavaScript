 
function eusei (liguagem) {
        if (liguagem.indexOf('Css') >= 0) {
            return true;
        };
    };
    
    var liguagem = ['Javascript', 'Css', 'Html', 'Vue.js'];
    
    if (eusei(liguagem)) {
        document.write('vc e muito vc e muito inteligente ')
    }else{
        document.write('vc não e tão inteligente');
    }