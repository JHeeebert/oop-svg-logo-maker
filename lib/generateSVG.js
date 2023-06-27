const genertateSVG = (shape) => {
    return `
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="200" height="200">
${shape.render()}
<text
    x="50%"
    y="${shape.logoShape === "circle" ? "50%" : "60%"}"
    text-anchor="middle"
    fill="${shape.logoTextColor}"
    font-size="30px"
    font-family="Arial">${shape.logoName}
    dy=".3em"
    letter-spacing="1px"
    font-weight="bold"
</text>
`;
};
module.exports = genertateSVG;