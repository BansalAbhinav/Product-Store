import Product from "../models/product.model.js";

export const showProduct = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ sucess: true, data: products });
  } catch (error) {
    res.status(400).json({ success: false, message: "Server error" });
  }
};

export const insertProduct = async (req, res) => {
  const product = req.body; //user will send data
  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: "please provide valid data" });
  }

  const newproduct = new Product(product);
  try {
    await newproduct.save();
    res.status(200).json({ success: true, data: newproduct });
  } catch (error) {
    console.error("Error is create in product:", error.message);
    res.status(400).json({ success: false, message: "Server Error" });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  console.log("id:", id);
  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Product Deleted" });
  } catch (error) {
    res.status(400).json({ sucess: false, message: "Product Id Invalid" });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body;
  try {
    const updatedproducted = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });
    res.status(200).json({ success: true, data: updatedproducted });
  } catch (error) {
    res
      .status(200)
      .json({ success: false, message: "Unable to update the Products" });
  }
};
