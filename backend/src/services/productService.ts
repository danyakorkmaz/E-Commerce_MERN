import productModel from "../models/productModel";

export const getAllProducts = async () =>{
    return await productModel.find();
}


export const seedIntitialProducts = async () => {

try {
    const products =[
        { title:"Dell laptop", image:"https://cdn.webshopapp.com/shops/308128/files/466926742/image.jpg", price:15000, stock:10},
        { title:"Asus laptop", image:"https://www.amazon.com.tr/ASUS-Notebook-F515EA-EJ3282-i5-1135G7-Graphics/dp/B0BL7QRQHN", price:25000, stock:20},
        { title:"HP laptop", image:"https://www.hpstore.com.tr/hp-250-laptop-g9-intel-core-i5-1235u-8gb-ram-512gb-ssd-156-inc-fhd-windows-11-home-gumus-grisi-9m3g4at-15077-19-B.jpg", price:40000, stock:8},
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