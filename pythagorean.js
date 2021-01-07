const input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 },
];
const result = input.map((input) =>
  Math.pow(Math.pow(input.x, 2) + Math.pow(input.y, 2), 0.5)
);

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);
