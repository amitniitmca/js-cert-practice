function displayProduct(product) {
    if(product.discount == null){
        product.discount = 0;
    }
    if (product.stock != null && product.price != null) {
        let discountValue = 0; 
        if (product.discount) {
            discountValue = product.price * (product.discount / 100);
        }
        product.salesPrice = product.price - discountValue;
        return product;
    }
    return null;
}

let product1 = { price: 23, discount: null, stock: 0 }; 
let product2 = { price: 75, discount: 10, stock: '0' }; 
let product3 = { price: '35', discount: '5', stock: 'false' }; 

console.log('Product 1: ', displayProduct(product1)); 
console.log('Product 2: ', displayProduct(product2)); 
console.log('Product 3: ', displayProduct(product3));