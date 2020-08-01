// modulo js comum

function Bicho(numeros, grupo){
    this.numeros = numeros;
    this.grupo = grupo; 
    sorteado = false; 
}

Bicho.prototype.getNumeros = function(){
    return numeros;
}

Bicho.prototype.setSorteado = function(sorteado){
    this.sorteado = sorteado;
}

module.exports = {Bicho}; 

//classe ES6

class Bicho2{
    constructor(numeros, grupo){
        this.numeros = numeros;
        this.grupo = grupo;
    }

    getNumeros(){
        return numeros;
    }

    setSorteado(sorteado){
        this.sorteado = sorteado;
    }

}

export default Bicho2;