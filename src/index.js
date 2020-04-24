const $ = require('jquery');

const person = { firstname: 'emily' };
const { firstname } = person;
const sayHello = (person) => `Hello ${person.firstname} again`;

console.log(sayHello(person));


$(document).ready(()=>{
    $('body').html(sayHello(person));
});