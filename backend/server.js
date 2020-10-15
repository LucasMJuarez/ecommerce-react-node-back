
import express from 'express';
import data from './data';
import dotenv from 'dotenv';
import config from './config';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import userRoute from './routes/userRoute';
import productRoute from './routes/productRoute';
dotenv.config();

const mongodbUrl = config.MONGODB_URL;
mongoose
  .connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .catch((error) => console.log(error.reason));

const app = express();
app.use(bodyParser.json());
//app.use(express.json());
//app.use(express.urlencoded({extended: true}));//Sirve cuando un formulario envie info yo pueda entenderlo

app.use("/api/users", userRoute);
app.use("/api/products", productRoute);

/*  app.get("/api/products/:id", (req, res) => {
  const productsId = req.params.id;
  const product = data.products.find((x) => x._id === productsId);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product not Found" });
  }
});

app.get("/api/products", (req, res) => {
  res.send(data.products);
}); */ 

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
