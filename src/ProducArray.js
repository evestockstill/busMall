export class ProductData {
    constructor(products) {
        this.products = products.slice();
    }
    getProducts() {
        return this.products;
    }
    removeProductsById(someId) {
        this.products.forEach(product => {
            if (someId === product.id) {
                this.products.splice(someId, 1);
            }
            
        });
    }
    getProductById(someId) {
        let productMatch;
        this.products.forEach(product => {
            if (someId === product.id) {
                productMatch = product;
            }
        });
        return productMatch;
    }
    hasAnyProducts() {
        return this.products.length;
    }
    getRandomProduct() {
        const randomProductIndex = Math.floor(Math.random() * this.products.length);
        return this.products[randomProductIndex];
    }
}
