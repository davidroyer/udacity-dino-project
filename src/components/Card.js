// import PigeonImage from "../images/pigeon.png";

const GridItemContent = (item) => {
  function factRenderer(item) {
    if (item.species !== "human") return `<p>${item.fact}</p>`;
    else return "";
  }

  const imgName = item.species.toLowerCase();

  return `
  <h2 class="text-3xl">${item.species}</h2>
  <img src="data/images/${imgName}.png" alt="${item.species} image"/>
  ${factRenderer(item)}
  `;
};
export default GridItemContent;
