//funções de flecha são anônimas e atuam em contexto léxico 

const soma = (a, b) => a + b;

soma(1,2)

//funções podem ter argumentos padrão 

let soma = function(a = 1, b = 2){
    return a + b;
}
 
console.log(soma(4));

let soma = function(a = 1, b = a){
    return a + b;
}

console.log(soma(4));

//operador rest permite receber um número qualquer de argumentos em uma função 

let soma = function(...rest){
    return rest.reduce((total, valor) => total + valor, 0);
}

console.log(soma(4, 5, 6, 7));