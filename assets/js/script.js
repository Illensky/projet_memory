// create a array of image URL

const images = [
    "assets/img/css.png",
    "assets/img/cube.png",
    "assets/img/jq.png",
    "assets/img/node.png",
    "assets/img/php.png",
    "assets/img/ps.png",
    "assets/img/py.png",
    "assets/img/s.png",
    "assets/img/sass.png",
    "assets/img/w.png"
];


//get the usefull html elements

const container = document.querySelector('body');

// initialize a array to store the already given number of the getrandom function

let alreadyUsedNumber = [];

function getRandom() {
    const random = Math.trunc(Math.random() *(images.length *2))
    if (alreadyUsedNumber.includes(random)) {
        return getRandom();
    }
    alreadyUsedNumber.push(random);
    return random;
}


// create 2 div by image

for (let i = 0; i <= images.length*2; i++) {
    const imageDiv = document.createElement("div");
    imageDiv.style.width = "130px";
    imageDiv.style.height = "130px";
    imageDiv.id = "div" + i.toString();
    container.appendChild(imageDiv);
}


// set background image randomly to two div by image and add theme the same class

for (let image of images) {
    const one = document.querySelector("#div" + getRandom().toString());
    one.classList = image;
    one.style.backgroundImage = `url("` + image + `")`;

    const two = document.querySelector("#div" + getRandom().toString());
    two.classList = image;
    two.style.backgroundImage = `url("` + image + `")`;
}