class ProductData {
    constructor(products) {
        this.products = products.slice();
    }
    getProducts() {
        return this.products;
    }
    removeProductsById(productId) {
        this.products.forEach(product => {
            if (productId === product.id) {
                this.products.splice(productId, 1);
            }
            
        });
    }
    getProductById(productId) {
        let productMatch;
        this.products.forEach(product => {
            if (productId === product.id) {
                productMatch = product;
            }
        });
        return productMatch;
    }
    hasAnyProducts() {
        return this.products.length > 0;
    }
    getRandomProducts() {
        const randomProductIndex = Math.floor(Math.random() * this.products.length);
        return this.products[randomProductIndex];
    }
}
export default ProductData;
