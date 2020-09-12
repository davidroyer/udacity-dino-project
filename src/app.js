const getApiData = async () => {
  const response = await fetch("data/dino.json");
  return await response.json();
};

function DinoConstructor(dinoObject) {
  Object.assign(this, dinoObject);
}

async function init() {
  const { Dinos } = await getApiData();
  const dinosArray = Dinos.map((dino) => new DinoConstructor(dino));
  console.log("dinosArray", dinosArray);

  const grid = document.getElementById("grid");

  dinosArray.forEach((dino) => {
    let gridItem = document.createElement("div");
    gridItem.textContent = dino.species;
    gridItem.classList.add("grid-item");
    grid.appendChild(gridItem);
  });
}

init();
