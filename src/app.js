/* eslint-disable no-unused-vars */

import { DinoConstructor, HumanConstructor } from "./models";

const getApiData = async () => {
  const response = await fetch("data/dino.json");
  return await response.json();
};

async function loadGrid() {
  const { Dinos } = await getApiData();
  const dinosArray = Dinos.map((dino) => new DinoConstructor(dino));
  console.log("dinosArray", dinosArray);

  const grid = document.getElementById("grid");

  dinosArray.forEach((dino) => {
    dino.dinoMethod();
    dino.creatureMethod();
    let gridItem = document.createElement("div");
    gridItem.textContent = dino.species;
    gridItem.classList.add("grid-item");
    grid.appendChild(gridItem);
  });
}

loadGrid();

function handleButtonClick() {
  const submitBtn = document.getElementById("submit-button");

  submitBtn.addEventListener("click", function () {
    let user = new HumanConstructor({
      name: "David",
      height: "5",
      weight: 200,
      diet: "Herbivore",
    });
    user.humanMethod();
    user.creatureMethod();
  });
}

handleButtonClick();

// NOTE: Not sure why I need the IFFE but this is with it
// (function () {
//   handleButtonClick();
// })();
