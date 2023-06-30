const tripLength = prompt('Quanti chilometri vuoi percorrere?');
const yearOfBirth = prompt('In che anno sei nato?');

const userAge = 2023 - parseInt(yearOfBirth);

document.getElementById('testAge').innerHTML = `You are ${userAge} years old`;

let ticketPrice = 0.21 * parseInt(tripLength);

if (userAge < 18) {
  ticketPrice *= 0.8;
  document.getElementById('priceResult').innerHTML = `Your ${tripLength}km trip costs ${ticketPrice}€`;
} else if (userAge > 65) {
  ticketPrice *= 0.6;
  document.getElementById('priceResult').innerHTML = `Your ${tripLength}km trip costs ${ticketPrice}€`;
} else {
  document.getElementById('priceResult').innerHTML = `Your ${tripLength}km trip costs ${ticketPrice}€`;
}