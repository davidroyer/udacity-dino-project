export function inheritFromParent(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

export function insertIntoArray(array, insertPosition, insertValue) {
  array.splice(insertPosition, 0, insertValue);
  // return [...array].splice(insertPosition, 0, insertValue); // Maybe for immutability
}

export function convertToInches(feet) {
  return feet * 12;
}

export function getTotalInches(value1, value2) {
  return value1 + value2;
}

export function convertToNumber(value) {
  return Number(value);
}

export function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function isPositiveNumber(value) {
  return Math.sign(value) === 1;
}

export function isExtinctDino(species) {
  return species !== "Pigeon" && species !== "human";
}
