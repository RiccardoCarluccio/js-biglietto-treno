const tripLength = prompt('Quanti chilometri vuoi percorrere?');
const yearOfBirth = prompt('In che anno sei nato?');

const userAge = 2023 - parseInt(yearOfBirth);

document.getElementById('testAge').innerHTML = `You are ${userAge} years old`;

let ticketPrice = 0.21 * parseInt(tripLength);

if (userAge < 18) {
  Math.round((ticketPrice *= 0.8) * 100) / 100;
  document.getElementById('priceResult').innerHTML = `Your ${tripLength}km trip costs ${ticketPrice}€`;
} else if (userAge > 65) {
  Math.round((ticketPrice *= 0.6) * 100) / 100;
  document.getElementById('priceResult').innerHTML = `Your ${tripLength}km trip costs ${ticketPrice}€`;
} else {
  Math.round(ticketPrice * 100) / 100;
  document.getElementById('priceResult').innerHTML = `Your ${tripLength}km trip costs ${ticketPrice}€`;
}