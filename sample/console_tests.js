preco = 1,
produto = "Esquís";

//operações aritiméticas 

/* note que em "preco-- ", a operação só é computada após a execução
 e o número que aparece no console está inalterado. 
 */
console.log(preco += 4, preco %= 2, ++preco, preco--, typeof preco);

//escapando caracteres

console.log(" \"Escapar\" ");

//concatenar strings

console.log(`compre ${produto}`, "bro");
/*ou*/ console.log("compre " + produto);  

//métodos de string e atributos
console.log(produto.toLowerCase(), 
            produto.substring(1,4) ) ;

console.log(produto.length);