const escola = 'Cod3r';

console.log(escola.charAt(3));
console.log(escola.charAt(5));
console.log(escola.charCodeAt(3));
console.log(escola.charCodeAt(2));
const meuNome = 'Jefferson';
console.log(meuNome.charCodeAt(0));

console.log(escola.indexOf('d'));

console.log(escola.substring(1));
console.log(escola.substring(0,3));

console.log('Escola '.concat(escola).concat("!"));
console.log('Escola '.concat(escola).concat("!"));
console.log(escola.replace(3,'e'));
console.log(escola.replace(/\d/,'e')); //Substitui todos os números pela letra e;
console.log(escola.replace(/\w/g,'e')); //Substitui todas as letras e numeros pela letra e; 
                                        /*com o "g" e faz a substituição de todos os
                                         caracteres, sem ele só é realizado o primeiro  */

console.log('Ana, Maria, Pedro');
console.log('Ana, Maria, Pedro'.split(','));
console.log('Ana, Maria, Pedro'.split(/,/));

console.log('3'+2);