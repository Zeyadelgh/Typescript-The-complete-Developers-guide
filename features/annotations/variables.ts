const apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

let now: Date;

//Array
let arrow: Array<number> = [1, 2, 3];
let colors: string[] = ['red', 'green', 'blue'];

arrow.findIndex((element) => {
  return console.log(element === 2);
});

let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations
// 1) Function that returns the 'any' type

interface Coordinates {
  x: number;
  y: number;
}

const json: string = '{"x": 10, "y":20, "name":"Zayed" }';
const coordinates = JSON.parse(json) as Coordinates;
console.log(coordinates);

let words = ['red', 'green', 'blue'];
let foundWords: boolean = false;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWords = true;
  }
}
