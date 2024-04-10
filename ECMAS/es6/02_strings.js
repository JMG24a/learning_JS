let hello = 'hello';
let world = 'world';

// old template
let epicPhrase = hello + ' ' + world + '!';

// template literals
let epicPhrase2 = `${hello} ${world}!`;

// multiline strings
let lorem = 'this is my string \n' + 'this is another line';

let loren2 = `this is my string 
    with template literal.
`;

console.log(lorem)
console.log(lorem2)
