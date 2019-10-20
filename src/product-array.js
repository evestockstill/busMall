export class ProductArray {
    constructor(products) {
        this.products = products.slice();
    }
    getProducts() {
        return this.products;
    }
    removeProductById(someId) {
        this.products.forEach((product, i) => {
            if (someId === product.id) {
                this.products.splice(i, 1);
            }
        });
        return null;
    }
    getProductById(someId) {
        let productsMatch;
        this.products.forEach(products => {
            if (someId === products.id) {
                productsMatch = products;
            }
            return productsMatch;
        });
    }
    hasAnyProduct() {
        return this.products.length > 0;
    }
    getRandomProduct() {
        const randomProductIndex = Math.floor(Math.random() * this.products.length);
        return this.products[randomProductIndex];
    }
}