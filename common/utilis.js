import productData from '../src/productData.js';

export function findById(products, id) {
    for (let i = 0; i < productData.length; i++) {
        const product = productData[i];
        if (product.id === id) {
            return products;
        }
    }
    
}
