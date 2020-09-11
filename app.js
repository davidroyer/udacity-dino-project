const getApiData = async () => {
  const response = await fetch('dino.json');
  return await response.json();
};

function DinoConstructor(dinoObject) {
  Object.assign(this, dinoObject);
}

async function init() {
  const { Dinos } = await getApiData();
  const dinosArray = Dinos.map(dino => new DinoConstructor(dino));
  console.log('dinosArray', dinosArray);
}

init();
