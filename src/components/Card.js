const GridItemContent = (item) => {
  function factRenderer(item) {
    if (item.species !== "human") return `<p>${item.fact}</p>`;
    else return "";
  }

  return `
  <h2>${item.species}</h2>
  ${factRenderer(item)}
  `;
};
export default GridItemContent;
