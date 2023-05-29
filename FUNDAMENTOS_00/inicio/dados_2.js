// Armazenar dados na variável e fazer uma operação nela
let preco = 19.90;
let desconto = 0.4;
let precoComDesconto = preco * ( 1 - desconto);
console.log('R$ '+ precoComDesconto);

//---
let nome = "Cardeno"; //String (Texto) -> Sequencia de Símbolos.
let categoria = "Papelaria";


console.log("Produto: " + nome 
            +", Categoria: " + categoria 
            +", Preço: " + preco 
            +", Desconto: " + desconto 
            +", Preço com Desconto: " + precoComDesconto
            );

console.log(1+1);
console.log('1'+1);


console.log("  Produto: " + nome + ", \n"
            +"  Categoria: " + categoria + ", \n"
            +"  Preço: " + preco + ", \n"
            +"  Desconto: " + desconto + ", \n"
            +"  Preço com Desconto: " + precoComDesconto
            );