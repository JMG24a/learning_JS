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
