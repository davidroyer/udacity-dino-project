import {
  inheritFromParent,
  isPositiveNumber,
  randomIntFromInterval,
} from "../helpers";

/**
 * The parent constructor that will be extended from
 * @param {Object} creatureObject
 */
export function CreatureConstructor(creatureObject) {
  Object.assign(this, creatureObject);
}

/**
 * Adds method to CreatureConstructor's Prototype
 */
CreatureConstructor.prototype.creatureMethod = function () {
  console.log(`Setup on the Creature's Prototype`);
};

CreatureConstructor.prototype.generateFact = function () {
  let randomNumber = randomIntFromInterval(1, 2);
  if (randomNumber === 1) return `Fact 1 here.`;
  else if (randomNumber === 2) return `Fact 2 Here.`;
};

CreatureConstructor.prototype.setFact = setFact;
CreatureConstructor.prototype.compareHeight = compareHeight;

/**
 * The Dino Constructor
 * @param {Object} dinoObject
 */
export function DinoConstructor(dinoObject) {
  CreatureConstructor.call(this, dinoObject);

  this.dinoMethod = function () {
    console.log("Dino's fact -> ", this.fact);
  };
}

// DinoConstructor.prototype.compareHeight = compareHeight;

/**
 * The Human Constructor
 * @param {Object} humanObject
 */
export function HumanConstructor(humanObject) {
  CreatureConstructor.call(this, humanObject);

  this.humanMethod = function () {
    console.log("Human Info -> ", this);
  };
}

/**
 * Extends the Creature Constructor by setting the prototype of the SubClass to
 * the prototype of the Parent Class
 */
inheritFromParent(HumanConstructor, CreatureConstructor);
inheritFromParent(DinoConstructor, CreatureConstructor);

function setFact(newValue) {
  this.fact = newValue;
}

/**
 * Comparison Method 1
 * @description Compares height between human and other non-Pigeon creatures
 * @param {Object} human The human object
 * @param {Object} dino The dino object
 */
function compareHeight(human, dino) {
  const heightDifference = human.height - dino.height;
  const largerCreature = isPositiveNumber(heightDifference) ? "human" : "dino";

  const humanTallerText = `You are taller than the ${dino.species} by ${heightDifference} cm `;
  const dinoTallerText = `The ${
    dino.species
  } is taller than you by ${-heightDifference} cm`;

  if (largerCreature === "human") return humanTallerText;
  else return dinoTallerText;
}

/**
 * Compare Method 2
 * @todo
 */

/**
 * Compare Method 3
 * @todo
 */
