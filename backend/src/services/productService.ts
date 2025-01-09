import productModel from "../models/productModel";

export const getAllProducts = async () =>{
    return await productModel.find();
}


export const seedIntitialProducts = async () => {

try {
    const products =[
        { title:"Dell laptop", image:"https://cdn.webshopapp.com/shops/308128/files/466926742/image.jpg", price:15000, stock:10},
    ];  

    const existingProducts = await getAllProducts();

    if(existingProducts.length === 0){
        await productModel.insertMany(products)
    }

}
catch(err) {
console.error("connot see database", err);
}

};