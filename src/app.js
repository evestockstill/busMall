import { productDataArray } from './product-data.js';
import { ProductArray } from './product-array.js';
import { trackUserPick } from '../common/utilis.js';
const productImageTags = document.querySelectorAll('img');
const productRadioTags = document.querySelectorAll('input');
const products = new ProductArray(productDataArray);
let clickedImages = [];
let clicks = 0;

const generateProduct = () => {
    let randomProduct1 = products.getRandomProduct();
    let randomProduct2 = products.getRandomProduct();
    let randomProduct3 = products.getRandomProduct();
    while (randomProduct1.id === randomProduct2.id || randomProduct2.id === randomProduct3.id) {
        randomProduct2 = products.getRandomProduct();
    } while (randomProduct3.id === randomProduct2.id || randomProduct1.id === randomProduct3.id) {
        randomProduct3 = products.getRandomProduct();
    }
    productImageTags.forEach((imageTag, i) => {
        if (i === 0) {
            imageTag.src = randomProduct1.image;
        } else if (i === 1) {
            imageTag.src = randomProduct2.image;
        } else if (i === 2) {
            imageTag.src = randomProduct3.image;
        }
    });
};
productRadioTags.forEach((radioTag) => {
    radioTag.addEventListener('click', (event) => {
        const userChoice = event.target.value;
        trackUserPick(clickedImages, userChoice);
        generateProduct();
        clicks++;
        if (clicks === 25) {
            window.location = './results/index.html';
        }

    });

});
generateProduct();
