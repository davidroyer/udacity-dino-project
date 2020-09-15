export function inheritFromParent(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

export function insertIntoArray(array, insertPosition, insertValue) {
  array.splice(insertPosition, 0, insertValue);
  // return [...array].splice(insertPosition, 0, insertValue); // Maybe for immutability
}
