import express from "express";
import "dotenv/config";

const PORT = 3000;
const app = express();

app.use(express.json());

app.get("/api/products", (req, res) => {
  const products = [
    {
      name: "Laptop",
      price: "20000",
      id: 1,
    },
    {
      name: "Mobile",
      price: "20000",
      id: 2,
    },
  ];

  return res.status(200).json({ products });
});

app.get("/api/products/:id", (req, res) => {
  const products = [
    {
      name: "Laptop",
      price: "20000",
      id: 1,
    },
    {
      name: "Mobile",
      price: "20000",
      id: 2,
    },
  ];

  const product = products.find((p) => p.id === Number(req.params.id));
  if (!product) {
    return res.status(404).json("Product not found");
  }
  res.json({ product });
});

app.post("/api/products", (req, res) => {
  const newProduct = req.body;
  newProduct.id = Date.now();
  if (newProduct) {
    res.status(200).json({ newProduct });
  }
});

app.get("/", (req, res) => {
  res.send("Hello Beeresh");
});

app.listen(PORT, (req, res) => {
  console.log(`The server is running on port ${PORT}`);
});
