'use strict';

/* App Module */
var mediaApp = angular.module('mediaApp', []);


mediaApp.filter('isGrafico', function(){
    return function(studente)
    {
        if(studente.specializzazione=="Grafico")
        {
        return studente.nome +" "+studente.cognome +" ha la sciarpa";
        }
        else
        {
        return studente.nome +" "+studente.cognome +" non ha la sciarpa";
        }
    }
});


mediaApp.filter('isSleeping', function(){
    return function(studente,addormentato)
    {
        if(addormentato)
            return studente.nome +" "+studente.cognome +" si sta appisolando";
    }
})