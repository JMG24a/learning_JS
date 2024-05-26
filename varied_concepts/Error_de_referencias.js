// example 1
/*
    Por que ReferenceError?
    Las variables declaradas con let y const tienen scope de bloque es por este motivo que si bien tenemos 2 variables con el nombre name, ambas son diferentes e independientes en sus respectivos scopes.

    La función getName intenta imprimir por consola name antes de ser declarada, por hoisting el interprete de javascript hará que name entre en lo que se denomina Temporal Dead Zone, una región del código donde la variable esta declarada pero no es posible acceder a ella.

    Todo esto producirá un ReferenceError.

    Si dentro de la función getName la variable name estuviera declara con var:

    function getName() {
        console.log(name)
        var name = "Sarah"
    }  

    Por hoisting el resultado sería undefined puesto que la Temporal Dead Zone solo existe con variables declaradas con let y const.
*/
const name = 'a'

function getName () {
  console.log(name)
  let name = 'b'
  console.log(name)
}

getName()


// example 2
/*
ReferenceError: Cannot access "name" before initialization:

Primero, recordar que las variables declaradas con let o const tienen scope de bloque.
Segundo, recordar que las variables declaradas con let o const no tienen hoisting, cuando intentamos acceder a una variable antes de su inicializción entra en la Temporal Dead Zone. La variable name no puede ser mostrada sin antes inicializarla, name esta en su Temporal Dead Zone.
*/

function test() {
  let name = 'Alex';
  if (true) {
    console.log(name);
    let name = 'Oscar';
  }
}
console.log(test());
