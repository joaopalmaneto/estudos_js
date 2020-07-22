
//Constructor pattern -> compatível com ES5 
function Bicho(grupo, numeros){
    this.grupo = grupo;
    this.numeros = numeros; 
}


Bicho.prototype.showNumeros = function(){
    this.numeros.forEach(element => {
        console.log(element)
    });
}

const Burro = new Bicho(3, [31,32,33,34]);
const a = Burro.showNumeros();
console.log(a);
