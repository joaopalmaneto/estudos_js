function Bicho(){
    if(!Bicho.instance){
        Bicho.instance = this;
    }

    return Bicho.instance; 
}

const Aguia = Bicho.call({grupo: 2, numeros: [21,22,23,24]});
console.log(Aguia);

const Burro = Bicho.call({grupo: 3, numeros: [31,32,33,34]});
console.log(Burro);

