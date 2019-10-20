import { userPicksArray } from '../src/app.js';
export class ProductArray {
    constructor(products) {
        this.products = products.slice();
        this.i = -1;
    }
    getProducts() {
        return this.products;
    }

       
    getRandomProduct() {
        this.i++;
        if (this.i >= 20)
            this.i = 0;
        return this.products[this.i];
    }
    findById(items, id) {
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            if (item.id === id) {
                return item;
            }
        }
        return null;
    }
}
// const array = userPicksArray.find(item =>
//     item.id === 'bag');