/*
    Pese a que null es un primitivo, debido a un bug del lenguaje su tipo de dato es object.

    Este bug es muy antiguo y se determino que no vale la pena arreglarlo al día de hoy ya que se pueden romper muchos programas 
    que pueden depender de esta error.

    Este bug es bastante conocido en programadores experimentados y usado en entrevistas laborales para estimar tu conocimiento 
    del lenguaje.
*/

console.log(typeof null == 'object'); // null -> is object // -> true