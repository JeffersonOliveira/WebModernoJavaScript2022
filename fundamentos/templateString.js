const nome = 'Rebeca';
const concatenacao = 'Olá ' + nome + '!';
const template = `Olá ${nome}!`;
const template2 = `
  Olá 
  ${nome}!`;          
console.log(concatenacao);
console.log(template);
console.log(template2);

//expressoes...
console.log(`A soma de 1 + 1 = ${1 + 1}`);

//funções aero


//` = backchique = crase = delimitação de um template String em js

const up = texto => texto.toUpperCase();
console.log(`Ei... ${up('cuidado')}!`);  // ${``}  ---> Essa é a cara do template string completa.