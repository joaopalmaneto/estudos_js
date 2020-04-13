preco = 1,
produto = "Esquís";

//operações aritiméticas 

/* note que em "preco-- ", a operação só é computada após a execução
 e o número que aparece no console está inalterado. 
 */
console.log(preco += 4, preco %= 2, ++preco, preco--, typeof preco);

/* note que valores float podem causar erros em cálculos e comparações
por não possuírem numero fixo de casas decimais */
console.log(1.1 + 1.3 === 2.4, +(1.1 + 1.3).toFixed(2) === 2.4)


//escapando caracteres

console.log(" \"Escapar\" ");

//concatenar strings

console.log(`compre ${produto}`, "bro");
/*ou*/ console.log("compre " + produto);  

//métodos de string e atributos
console.log(produto.toLowerCase(), 
            produto.substring(1,4) ) ;

console.log(produto.length);

//definindo objetos 

let pessoa = {
    nome: "João",
    idade: 38, 
    casado: false
};

console.log(pessoa);