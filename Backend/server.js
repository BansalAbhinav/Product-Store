import express, { json } from "express";
import dotenv from "dotenv";
import { connectDB } from "./database/db.js";
import productRouters from "./routes/products.routes.js";
import path from "path";
const app = express();
dotenv.config();

const __dirname = path.resolve();

app.use(express.json());
app.use("/api/products", productRouters);
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "Frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "Frontend", "dist", "index.html"));
  });
}
const PORT = process.env.PORT;
app.listen(PORT, () => {
  connectDB();
  console.log("server Started at http://localhost:" + PORT);
});
