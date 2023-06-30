const tripLength = prompt('Quanti chilometri vuoi percorrere?');
const yearOfBirth = prompt('In che anno sei nato?');

const userAge = 2023 - parseInt(yearOfBirth);

document.getElementById('test').innerHTML = `la tua età è: ${userAge}`;