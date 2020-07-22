function Bicho(customProperties){
    return {
        grupo: 2,
        numeros: [21,22,23,24],
        ...customProperties
    }
}

const Burro = Bicho({grupo: 3, numeros: [31,32,33,34], cor:"cinza"}); 
console.log(Burro);

const Aguia = Bicho();
console.log(Aguia)