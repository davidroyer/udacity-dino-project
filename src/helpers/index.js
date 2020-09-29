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

/**
 * Comparison Method 1
 * @description Compares height between human and other non-Pigeon creatures
 * @param {Object} human The human object
 * @param {Object} dino The dino object
 */
export function compareHeight(human, dino) {
  const heightDifference = human.height - dino.height;
  const largerCreature = isPositiveNumber(heightDifference) ? "human" : "dino";

  const humanTallerText = `You are taller than the ${dino.species} by ${heightDifference} inches `;
  const dinoTallerText = `The ${
    dino.species
  } is taller than you by ${-heightDifference} inches`;

  if (largerCreature === "human") return humanTallerText;
  else return dinoTallerText;
}

/**
 * Comparison Method 2
 */

export function compareWeight(human, dino) {
  const weightDifference = human.weight - dino.weight;
  const heavierCreature = isPositiveNumber(weightDifference) ? "human" : "dino";

  const humanHeavierText = `You are heavier than the ${dino.species} by ${weightDifference} lbs.`;
  const dinoHeavierText = `The ${
    dino.species
  } is heavier than you by ${-weightDifference} lbs`;

  if (heavierCreature === "human") return humanHeavierText;
  else return dinoHeavierText;
}

/**
 * Comparison Method 3
 * @todo
 */
export function compareDiet(human, dino) {
  const sameDiet = human.diet === dino.diet;
  const comparisonText = sameDiet ? "similar" : "different";

  return `You and the ${dino.species} had a ${comparisonText} diet.`;
}
