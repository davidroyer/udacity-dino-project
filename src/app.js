/* eslint-disable no-unused-vars */

import GridItemContent from "./components/Card";
import {
  convertToInches,
  convertToNumber,
  insertIntoArray,
  isExtinctDino,
} from "./helpers/";
import {
  compareHeight,
  compareWeight,
  DinoConstructor,
  HumanConstructor,
} from "./models";

const getApiData = async () => {
  const response = await fetch("data/dino.json");
  return await response.json();
};

async function loadGrid(human) {
  const { Dinos } = await getApiData();
  const creaturesArray = Dinos.map((dino) => new DinoConstructor(dino));
  const grid = document.getElementById("grid");

  insertIntoArray(creaturesArray, 4, human);

  creaturesArray.forEach((creature) => {
    console.log("loadGrid -> creature", creature);

    if (isExtinctDino(creature.species)) {
      creature.facts = [
        ...creature.facts,
        compareWeight(human, creature),
        compareHeight(human, creature),
      ];
      const factToUse = creature.randomizedFactGenerator();
      creature.setFact(factToUse);
    }

    let gridItemWrapper = document.createElement("div");
    gridItemWrapper.classList.add("grid-item");
    gridItemWrapper.innerHTML = GridItemContent(creature);
    grid.appendChild(gridItemWrapper);
  });
}

function handleFormSubmission() {
  const form = document.getElementById("comparison-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const species = "human";
    const name = form.elements["name"].value;
    const diet = form.elements["diet"].value;
    const weight = form.elements["weight"].value;
    const heightFeet = form.elements["height-feet"].value;
    const heightInches = form.elements["height-inches"].value;
    const height = convertToInches(heightFeet) + convertToNumber(heightInches);

    let human = new HumanConstructor({
      name,
      height,
      diet,
      species,
      weight: convertToNumber(weight),
    });

    loadGrid(human);
    form.style.display = "none";
  });
}

handleFormSubmission();

// NOTE: Not sure why I need the IFFE but this is with it
// (function () {
//   handleFormSubmission();
// })();
