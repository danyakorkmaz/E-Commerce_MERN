import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute";
import productRoute from "./routes/productRoute"
import { seedIntitialProducts } from "./services/productService";

const app = express();
const port = 3001;

app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/koyluce")
  .then(() => console.log("Mongo connected !"))
  .catch((err) => console.log("Failed to connect!", err));

//seed the products to database
seedIntitialProducts();

app.use('/user', userRoute);
app.use('/product', productRoute);


  app.listen(port, () =>{
   console.log(`Server is running at :http://localhost:${port}`)
  })