const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];
let carsByMake = [['f150'], ['corol'], ['camro']];

// Help with inference when extracting values

const cars = carMakers[0];
carMakers.map((car: string): string => {
  car += ' 2020';
  [...carMakers, car];
  console.log(car);
  return car;
});

const importantDates: (Date | string)[] = [new Date()];

importantDates.push('hello');
console.log(...importantDates);
