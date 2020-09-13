// "parcel-plugin-static-files-copy": "^2.5.0"
//

// "staticFiles": {
//   "staticPath": "static",
//   "staticOutDir": "dist"
// },

// "staticFiles": {
//   "staticPath": "src/data",
//   "staticOutDir": "dist"
// },

inheritPrototype(DinoConstructor, CreatureConstructor);
inheritPrototype(DinoConstructor, CreatureConstructor);

function inheritPrototype(child, parent) {
  Object.setPrototypeOf(child, parent.prototype);
}


// NOTE: This should work from video but does NOT
// Object.setPrototypeOf(DinoConstructor, CreatureConstructor.prototype);
// Object.setPrototypeOf(HumanConstructor, CreatureConstructor.prototype);
