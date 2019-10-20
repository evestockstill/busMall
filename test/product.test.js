import { ProductArray } from '../src/product-array.js';
import { productDataArray } from '../src/product-data.js';

const productArray = new ProductArray(productDataArray);
const test = QUnit.test;

test('gets product by id', assert => {
    const id = 'banana';
    const expected = {
        id: 'banana',
        image: '../assets/banana.jpg',
        name: 'Banana Slicer',
    };
    const found = productArray.getProductById(id);
    assert.deepEqual(found, expected);
});
test ('remove product by ID', function(assert) {
    const id = 'bag';
    const expected = null;
    const productArray = new ProductArray(productDataArray);
    const removeProduct = productArray.removeProductById(id);
    assert.equal(removeProduct, expected);
});

