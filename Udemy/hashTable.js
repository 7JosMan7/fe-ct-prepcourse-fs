// hash table
// con una funsion anonima o lambda

let dispensadorChelas = function (compadre) {
   const tipo = {
      barrio: 'corona',
      mamon: 'ligth',
      ranchero: 'modelo especial'
   };
   
   const otra = 'caguama';
   let cheve = tipo[compadre] || otra;
   return `Tu cheve es: ${cheve}`;
};

const compa = 'mamon';
console.log(dispensadorChelas(compa));

