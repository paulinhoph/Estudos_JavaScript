 function experiencia(anos) {
        if (anos <= 1) return 'Iniciante';
        if (anos > 1 && anos <= 3) return 'Intermediário';
        if (anos > 3 && anos <= 6) return 'Experiente';
        if (anos >= 6) return 'Hard';    
    };

    var anosEstudo = 6;
    document.write(experiencia(anosEstudo));

    