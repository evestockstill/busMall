const products = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dogDuck', 'dragon', 'pen', 'petSweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'waterCan', 'wineGlass']
products.splice();

class ProductArray {
    constructor(products) {
        this.products = products;
} ////remove
removeProductbyId() {
    let newProducts
    this.products.forEach(product => {
        if (productNameId === this.Id) {
            this.products.splice(productNameId, 1)
        }
    })
}   
    getProductsById(productNameId) {
            this.products.forEach(product => {
                let productMatch;
                if(productNameId === product.id) {
                    productMatch === product;
                }
            });
            return productMatch
        }
        getRandomProduct() {
            const randomNum = Math.floor(Math.random() * this.products.length);
            return this.products[productsIndex]
        }
        hasProduct()
    };
        return this.products.length
