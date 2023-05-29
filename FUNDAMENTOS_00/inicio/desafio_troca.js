let a = 7;
let b = 94;
// Realizar a troca do valor armazenado em cada um das variáveis.

console.log('Antes da troca:');
console.log('a: '+ a);
console.log('b: '+ b);

// Forma 1 de trocar os valores das variáveis:
/* const temp = a;
a = b;
b = temp; */

// Forma 2 de trocar os valores das variáveis utilizando um recurso de js:
[a, b] = [b, a];

console.log('Depois da troca:');
console.log('a: '+ a);
console.log('b: '+ b);



