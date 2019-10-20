import { ProductArray } from '../src/product-array.js';
import { productData } from '../src/product-data.js';
const test = QUnit.test;

test('retrieve product by id', function(assert) {
    const id = 'bag';
    const expected = {
        id: 'bag',
        image: '../assets/bag.jpg',
        name: 'Rolling R2-D2 Suitcase'
    }; 
    const productArray = new ProductData(productData);
    const foundProduct = productArray.getProductById(id);
    assert.deepEqual(foundProduct, expected);
});
test ('remove product by ID', function(assert) {
    const id = 'bag';
    const expected = null;
    const productArray = new ProductData(productData);
    const removeProduct = productArray.removeProductsById(id);
    assert.equal(removeProduct, expected);
});