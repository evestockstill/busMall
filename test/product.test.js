// IMPORT MODULES under test here:
import { findById } from '../common/utilis.js';
import productData from '../src/productData.js';
const test = QUnit.test;

test('time to test a function', function(assert) {
    const id = 'bag';
    const expected = {
        id: 'bag',
        image: '../assets/bag.jpg',
        name: 'Rolling R2-D2 Suitcase'
    }; 
    const product = findById(productData, id);
    // Make assertions about what is expected valid result
    // assert.ok(product);
    assert.deepEqual(product, expected);
});
