import { inheritFromParent, randomIntFromInterval } from "../helpers";

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

/**
 * The Dino Constructor
 * @param {Object} dinoObject
 */
export function DinoConstructor(dinoObject) {
  CreatureConstructor.call(this, dinoObject);

  this.facts = [
    this.fact,
    `The ${this.species} lived in ${this.where}.`,
    `The ${this.species} was a ${this.diet}.`,
  ];

  this.randomizedFactGenerator = function () {
    const selectedIndex = Math.floor(Math.random() * this.facts.length);
    return this.facts[selectedIndex];
  };

  // this.compareHeight = function (human) {
  //   const weightDifference = human.height - this.height;
  //   const heavierCreature = isPositiveNumber(weightDifference)
  //     ? "human"
  //     : "dino";

  //   const humanHeavierText = `You are heavier than the ${this.species} by ${weightDifference} lbs.`;
  //   const dinoHeavierText = `The ${
  //     this.species
  //   } is heavier than you by ${-weightDifference} inches`;

  //   if (heavierCreature === "human") return humanHeavierText;
  //   else return dinoHeavierText;
  // };
}

// DinoConstructor.prototype.compareHeight = compareHeight;

/**
 * The Human Constructor
 * @param {Object} humanObject
 */
export function HumanConstructor(humanObject) {
  CreatureConstructor.call(this, humanObject);

  this.humanMethod = function () {};
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
