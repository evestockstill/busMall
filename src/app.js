import { productData } from './productData.js';
import { ProductData } from './ProducArray.js';
const img1 = document.getElementById('img-1');
const img2 = document.getElementById('img-2');
const img3 = document.getElementById('img-3');
// const productRadioTags = document.querySelectorAll('input');
// const productName = document.querySelector('product');
const products = new ProductArray(productData);

let randomProduct3 = products.getRandomProduct();
let randomProduct1 = products.getRandomProduct();
let randomProduct2 = products.getRandomProduct();

while (randomProduct1 === randomProduct2) {
    randomProduct2 = products.getRandomProduct();
}
while (randomProduct3 === randomProduct2 || randomProduct3 === randomProduct1) {
    randomProduct3 = products.getRandomProduct();
}
img1.src = randomProduct1.image;
img2.src = randomProduct2.imgage;
img3.src = randomProduct3.imgage;


    // productImageTags.forEach((productImageTag, i) => {
    //     if (i === 0) {
    //         productImageTag.src = randomProduct.image;
    //     } else if (i === 1) {
    //         productImageTag.src = randomProduct2.image;
    //     }
    //     else if (i === 2) {
    //         p.src = randomProduct3.image;
    //     }
    // });
// productRadioTags.forEach((radioTag, i) => {
//     if (i === 0) {
//         radioTag.value = randomProduct.id;
//     } else if (i === 1) {
//         radioTag.value = randomProduct2.id;
//     } else if (i === 2) {
//         radioTag.value = randomProduct3.id;
//     }
       
// });

