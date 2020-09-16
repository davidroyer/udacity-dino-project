/* eslint-disable no-unused-vars */

import { DinoConstructor, HumanConstructor } from "./models";
import { convertToInches, convertToNumber, insertIntoArray } from "./helpers/";
import GridItemContent from "./components/Card";

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
    let gridItemWrapper = document.createElement("div");
    gridItemWrapper.classList.add("grid-item");
    gridItemWrapper.innerHTML = GridItemContent(dino);
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
    const heightFeet = form.elements["height-feet"].value;
    const heightInches = form.elements["height-inches"].value;
    const height = convertToInches(heightFeet) + convertToNumber(heightInches);

    let human = new HumanConstructor({
      name,
      height,
      diet,
      species,
    });
    console.log("handleFormSubmission -> human", human);

    loadGrid(human);
    form.style.display = "none";
  });
}

handleFormSubmission();

// NOTE: Not sure why I need the IFFE but this is with it
// (function () {
//   handleButtonClick();
// })();
