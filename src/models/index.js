import { inheritFromParent } from "../helpers";

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
