let product = [
    {
        productName: "S24 Ultra 256GB",
        price: 130000,
        quantity: 10
    },
    {
        productName: "S23 Ultra 256GB",
        price: 100000,
        quantity: 11
    },
    {
        productName: "S22 Ultra 256GB",
        price: 80000,
        quantity: 15
    }
]
function addProduct(productName,price1,quantity1) {
    product.push({productName:`${productName}`,price:price1,quantity:quantity1});
    console.log(`Product added: ${productName}, Price: $${price1}, Quantity: ${quantity1}`);
}
function calculateTotal() {
    const price=product.reduce((sum,{price,quantity})=>sum+price*quantity,0);
    console.log(price);
}
function removeProduct(productName) {
    let index=product.findIndex((item)=>item.productName==productName);
    if(index!=-1)
    {
        console.log(`item ${productName} successfully removed`);
        product.splice(index,1)
    }else{
        console.log(`index:${index}`)
        console.log("Product not found!!!!");
    }
}
function displayProductDetails() {
    product.forEach(({productName,price,quantity})=>{
        console.log(`Product: ${productName}, Price: ${price}, Quantity: ${quantity}`);
    })
}
addProduct("S21 Ultra 256GB",60000,11);
removeProduct("S22 Ultra 256GB");
displayProductDetails();
calculateTotal();