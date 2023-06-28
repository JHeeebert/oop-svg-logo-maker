// function to generate SVG
const genertateSVG = (shapes) => {
    return `
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="200" height="200">
${shapes.render()}
<text
    x="50%"
    y="${shapes.logoShape === "circle" ? "50%" : "60%"}"
    text-anchor="middle"
    fill="${shapes.logoTextColor}"
    font-size="30px"
    font-family="Arial">${shapes.logoName}
    dy=".3em"
    letter-spacing="1px"
    font-weight="bold"
</text>
`;
};
module.exports = genertateSVG;