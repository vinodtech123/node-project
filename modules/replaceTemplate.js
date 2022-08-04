module.exports = (temp,product) => {

    let output  = temp.replace(/{%PRODUCTNAME%}/g,product.productName);
    output = output.replace(/{%IMAGE%}/g,product.image);
    output = output.replace(/{%PRODUCTPRICE%}/g,product.price);
    output = output.replace(/{%LOCATION%}/g,product.from);
    output = output.replace(/{%PRODUCTNUTRIENTNAME%}/g,product.nutrients);
    output = output.replace(/{%PRODUCTQUANTITY%}/g,product.quantity);
    output = output.replace(/{%PRODUCTDESCRIPTION%}/g,product.description);
    output = output.replace(/{%ID%}/g,product.id);

    if(!product.organic) output = output.replace(/{%NOT_ORGANIC%}/g,'not-organic');
    return output;
};