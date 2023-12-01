// Exercici 1

// Crea una funció JavaScript que crei un array de 6 colors per nom (‘verd’, ‘vermell’, ‘groc’, ‘blau’,
//     ‘negre’, ‘blanc’) i que:
//      digui si tots els colors són menors que ‘marró’
//      et torni els colors que són menors que ‘marró’
//      et torni els darrers 2 colors (independentment de quants hi hagin abans)
//      afegeixi el color ‘turquesa’
//      elimini el color ‘verd’

function colores(){
    let colors=["verd", "vermell", "groc", "blau","negre","blanc"];
    let color= "marro";
    let contador=0;
    let col = [];
    
    for(let i=0;i<colors.length;i++){
        if(colors[i]<color){
            
            contador ++;
            col +=colors[i];
        }

    }
    if(contador==5){
        document.write("Tots els color de l'array son menors a marró");
    }else{
        document.write("No tots els colors son menors a marró. Els que són menors=" + col);
    }

    document.write(colors.slice(-2))

}