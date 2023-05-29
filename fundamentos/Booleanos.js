let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

console.log('Os verdadeiros');
isAtivo = 1;
console.log(!!isAtivo); // Negação 2 vezes está sendo utilizado para mostra que o valor é de fato verdadeiro ou falso
                        //O Valor 1 com o negado 2 vezes mostra que o 1 é verdadeiro
//console.log(!isAtivo); // Negação irá colocar o valor para false;

// Todos os números inteiros são verdeiros com excesão do zero
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!!'Texto');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log('Os Falsos:');
console.log(!!0);
console.log(!!''); // String vazia é sempre falso;
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));


console.log('Para Finalizar...');
console.log(!!('' || null || 0 || ' ')); // Retorno o true ou false, mas 
console.log(('' || null || 0 || 'Epa')); // Retorna o último valor verdadeiro dos testes do teste "ou"
console.log(('' || null || 0 || 'Epa2', 123)); // Exemplo

//! exemplo de uso prática. Parece com o if ternário;
let nome = '';
console.log(nome || 'Desconhecido'); /* Testa se a variável nome está vazia,
                                         se estiver imprimi 'Desconhecido', caso contrário imprime o nome */
nome = 'Jefferson';
console.log(nome || 'Desconhecido'); 


