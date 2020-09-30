import { inheritFromParent } from "../helpers";

/**
 * The parent constructor that will be extended from
 * @constructor
 * @param {Object} creatureObject
 */
export function CreatureConstructor(creatureObject) {
  Object.assign(this, creatureObject);
}
CreatureConstructor.prototype.setFact = setFact;

/**
 * The Dino Constructor
 * @constructor
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
}

/**
 * The Human Constructor
 * @constructor
 * @param {Object} humanObject
 */
export function HumanConstructor(humanObject) {
  CreatureConstructor.call(this, humanObject);
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
