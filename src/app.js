import { productData } from './product-data.js';
import { ProductArray } from './product-array.js';
import { trackUserPick } from '../common/utilis.js';
const productImageTags = document.querySelectorAll('img');
const productRadioTags = document.querySelectorAll('input');
const products = new ProductArray(productData);
let clickedImages = [];
let clicks = 0;


const generateProducts = () => {
    const randomProduct = products.getRandomProduct();
    let randomProduct2 = products.getRandomProduct();
    let randomProduct3 = products.getRandomProduct();
    productImageTags.forEach((imageTag, i) => {
        if (i === 0) {
            imageTag.src = randomProduct.image;
            productRadioTags[i].value = randomProduct.id;  
        } else if (i === 1) {
            imageTag.src = randomProduct2.image;
            productRadioTags[i].value = randomProduct2.id;
        } else if (i === 2) {
            imageTag.src = randomProduct3.image;
            productRadioTags[i].value = randomProduct3.id;
        }
    });
};

productRadioTags.forEach((radioTag) => {
    radioTag.addEventListener('click', (event) => {
        const userChoice = event.target.value;
        trackUserPick(clickedImages, userChoice);
        generateProducts();
        clicks++;
        if (clicks === 25) {
            window.location = './results/results-page.html';

        }

    });

});

