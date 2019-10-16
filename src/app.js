import productData from './productData.js';
import ProductData from './ProductDataArray.js';
import notSelectedId from './notSelected.js';
import displayProducts from './displayProducts.js';
const products = new ProductData(productData);
const img1 = document.getElementById('img-1');
const img2 = document.getElementById('img-2');
const img3 = document.getElementById('img-3');
const productRadioTags = document.querySelectorAll('input[name=product]');
const productDisplay = document.querySelectorAll('.product');
const productName = document.getElementById('product-name');
const choiceContainer = document.getElementById('product-choice-container');
const nextBtnContainer = document.getElementById('next-button-container');
const nextBtn = document.getElementById('next-button');
const choicesLeft = document.getElementById('choices-left');
const notSelected = document.getElementById('not-selected');

let UserChoicesLeft = 25;
let live = true;
let notSelectedId = [];

const masterProductData = new ProductData(products);
let userChoice = null;

pickProduct();
const userChoice = (event) => {
    if (!live) return;
    const radioElement = event.target;
    choiceContainer.classList.add('show');
    radioElement.parentNode.classList.add('picked');
    UserChoicesLeft--;
    // const userSelected = randomProduct.id === radioElement.value

}






let randomProduct1 = products.getRandomProducts();
let randomProduct2 = products.getRandomProducts();
let randomProduct3 = products.getRandomProducts();

while (randomProduct1 === randomProduct2) {
    randomProduct2 = products.getRandomProducts();
}
while (randomProduct3 === randomProduct2 || randomProduct3 === randomProduct1 || randomProduct3 === randomProduct2) {
    randomProduct3 = products.getRandomProducts();
}
img1.src = randomProduct1.image;
img2.src = randomProduct2.image;
img3.src = randomProduct3.image;
  
productRadioTags.forEach((radioTag, i) => {
    if (i === 0) {
        radioTag.value = randomProduct1.id;
    } else if (i === 1) {
        radioTag.value = randomProduct2.id;
    } else if (i === 2) {
        radioTag.value = randomProduct3.id;
    }
    console.log(radioTag.value);
});


