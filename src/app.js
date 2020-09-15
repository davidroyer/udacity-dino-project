/* eslint-disable no-unused-vars */

import { DinoConstructor, HumanConstructor } from "./models";
import { insertIntoArray } from "./helpers/";

const getApiData = async () => {
  const response = await fetch("data/dino.json");
  return await response.json();
};

async function loadGrid(human) {
  const { Dinos } = await getApiData();
  const creaturesArray = Dinos.map((dino) => new DinoConstructor(dino));
  const grid = document.getElementById("grid");

  insertIntoArray(creaturesArray, 4, human);

  creaturesArray.forEach((dino) => {
    let gridItem = document.createElement("div");
    gridItem.textContent = dino.species;
    gridItem.classList.add("grid-item");
    grid.appendChild(gridItem);
  });
}

function handleButtonClick() {
  const submitBtn = document.getElementById("submit-button");

  submitBtn.addEventListener("click", function () {
    let human = new HumanConstructor({
      name: "David",
      height: "5",
      weight: 200,
      diet: "Herbivore",
      species: "human",
    });

    loadGrid(human);
  });
}

handleButtonClick();

// NOTE: Not sure why I need the IFFE but this is with it
// (function () {
//   handleButtonClick();
// })();
