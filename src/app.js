import { productData } from './product-data.js';
import { ProductArray } from './product-array.js';
const productImageTags = document.querySelectorAll('img');
const productRadioTags = document.querySelectorAll('input');
const products = new ProductArray(productData);
const userPicksArray = [];

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
generateProducts();
function trackUserPicks(productId) {
   
    let found = products.findById(userPicksArray, productId);
    generateProducts();
    if (!found) {
        found = {
            id: productId,
            timesClicked: 1
        };
        userPicksArray.push(found);
    } else {
        found.timesClicked++;
        return;
    }
}
productRadioTags.forEach((radioTag) => {
    radioTag.addEventListener('click', (event) => {
        if (event.target) {
            trackUserPicks(event.target.value);
        }
    });
});
export { userPicksArray };

