const players = ['Messi', '', 'Bhutia'];
console.log(players); //[ 'Messi', <1 empty item>, 'Bhutia' ]
const sales = 'Toyota';

function carTypes(name) {
  return name === 'Honda' ? name : `Sorry, we don't sell ${name}.`;
}

const car = { myCar: 'City', getCar: carTypes('Honda'), special: sales };

console.log(car.myCar);   // City
console.log(car.getCar);  // Honda
console.log(car.special); // Toyota
