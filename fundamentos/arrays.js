/* 
    Em js o array é heterogeneo, até porque é uma linguagem fracamente tipada.

*/

const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]); /*
                         Acessando um valor que não existe no array. O js não irá gerar erro, só irá 
                         retornar undefined para nós, por isso temos que tomar cuidado.
                        */
// Preenchendo a posição 4 do array:
valores[4] = 10;
console.log(valores);

//valores[10] = 11;
//console.log(valores); //Se eu mandar imprimir um array que tem posições vazias o js mostra isso para nós.

console.log(valores.length); // Mostra a quantidade de elementos no array;

// Como js é uma linguagem fracamente tipa eu posso passar vários tipos de variáveis em um array
valores.push({id: 3}, false, null, 'teste');  
console.log('Tamanho do array valores: '+  valores.length); // Mostra a quantidade de elementos no array;
console.log(valores); // O ideal é criar um array com dados homogeneos para facilitar o trabalho. Não devemos misturar dados.

console.log(valores.pop()); // A função pop() retira o ultimo elemento de um array
delete valores[0];
console.log(valores);

console.log('Imprimindo o tipo do array de valores');
console.log(typeof valores)

valores[0] = 123;
console.log(valores)