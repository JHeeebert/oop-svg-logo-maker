// imports and requires all the packages needed for the application
const inquirer = require('inquirer');
// imports node file system
const fs = require('fs');

const promptUser = () =>
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'logoName',
                message: 'Please enter 1-3 letters for your logo name:',
                validate: (logoName) => {
                    if (logoName.length > 3) {
                        console.log('Please enter 1-3 letters for your logo name:');
                        return false;
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'logoColor',
                message: 'Please enter a color for your logo text:',
                default: 'white',
            },
            {
                type: 'input',
                name: 'logoTextColor',
                message: 'Please enter a color for your logo text:',
                default: 'black',
            },
            {
                type: 'input',
                name: 'logoBackgroundColor',
                message: 'Please enter a color for your logo background:',
                default: 'black',
            },
            {
                type: 'list',
                name: 'logoShape',
                message: 'Please select a shape for your logo:',
                choices: ['Square', 'Circle', 'Triangle', 'Star', 'Heart', 'Diamond', 'Rectangle'],
                default: 'Square',
            },
        ])
        .then((data) => {
            const svgPath = "./dist/logo.svg";
            const finalLogo = generateShape(data);

            //Generate the svg logo here.
            fs.writeFile(svgPath, generateSVG(finalLogo), (err) =>
                err ? console.error(err) : console.log("Generated logo.svg")
            );
        })
        .catch((err) => console.error(err));
        
const generateShape = (data) => {
    const logoShape = data.logoShape;
    switch (logoShape) {
        case 'Square':
            return generateSquareLogo(data);
        case 'Circle':
            return generateCircleLogo(data);
        case 'Triangle':
            return generateTriangleLogo(data);
        case 'Star':
            return generateStarLogo(data);
        case 'Heart':
            return generateHeartLogo(data);
        case 'Diamond':
            return generateDiamondLogo(data);
        case 'Rectangle':
            return generateRectangleLogo(data);
        default:
            return generateSquareLogo(data);
    }
}

const generateSquareLogo = (data) => {
    const logoName = data.logoName;
    const logoColor = data.logoColor;
    const logoTextColor = data.logoTextColor;
    return `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
    <title>${logoName}</title>
    <rect x="0" y="0" width="100" height="100" fill="${logoColor}" stroke="${logoTextColor}" stroke
    ="none" />
    </svg>`;
}

const generateCircleLogo = (data) => {
    const logoName = data.logoName;
    const logoColor = data.logoColor;
    const logoTextColor = data.logoTextColor;
    return `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
    <title>${logoName}</title>
    <circle cx="50" cy="50" r="40" fill="${logoColor}" stroke="${logoTextColor}" stroke
    ="none" />
    </svg>`;
}

const generateTriangleLogo = (data) => {
    const logoName = data.logoName;
    const logoColor = data.logoColor;
    const logoTextColor = data.logoTextColor;
    return `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
    <title>${logoName}</title>
    <polygon points="50,0 0,50 50,100" fill="${logoColor}" stroke="${logoTextColor}" stroke
    ="none" />
    </svg>`;
}

const generateStarLogo = (data) => {
    const logoName = data.logoName;
    const logoColor = data.logoColor;
    const logoTextColor = data.logoTextColor;
    return `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
    <title>${logoName}</title>
    <polygon points="50,0 0,50 50,100" fill="${logoColor}" stroke="${logoTextColor}" stroke
    ="none" />
    </svg>`;
}

const generateHeartLogo = (data) => {
    const logoName = data.logoName;
    const logoColor = data.logoColor;
    const logoTextColor = data.logoTextColor;
    return `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
    <title>${logoName}</title>
    <polygon points="50,0 0,50 50,100" fill="${logoColor}" stroke="${logoTextColor}" stroke
    ="none" />
    </svg>`;
}

const generateDiamondLogo = (data) => {
    const logoName = data.logoName;
    const logoColor = data.logoColor;
    const logoTextColor = data.logoTextColor;
    return `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
    <title>${logoName}</title>
    <polygon points="50,0 0,50 50,100" fill="${logoColor}" stroke="${logoTextColor}" stroke
    ="none" />
    </svg>`;
}

const generateRectangleLogo = (data) => {
    const logoName = data.logoName;
    const logoColor = data.logoColor;
    const logoTextColor = data.logoTextColor;
    return `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
    <title>${logoName}</title> <rect x="0" y="0" width="100" height="10 0" fill="${logoColor}" stroke="${logoTextColor}" stroke = "none" /> </svg>`;
    }

const generateSVG = (logo) => {
    return logo;
}

promptUser();
