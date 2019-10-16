export class ProductArray {
    constructor(products) {
        this.products = products.slice();

    }
    getProducts() {
        return this.products;
    }

    getRandomProduct() {
        const randomProductIndex = Math.floor(Math.random() * this.products.length);

        return this.products[randomProductIndex];
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