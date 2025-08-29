const ProductModel = require('../models/product.js')

// get All Products

exports.getAllProduct = async(req, res)=>{
  try{
    let product = await ProductModel.find();
    if(!product) return res.status(404)
      res.status(200).send(product)
  }catch(err){
    res.status(500).send(err.message);
  }
}

// post, create A product
// exports.createProduct = async(req, res)=>{
//   let course =  await ProductModel.create({
//         product_name: req.body.product_name,
//         product_price: req.body.product_price,
//         isInStock: req.body.isInStock,
//         ratings: req.body.ratings
//     })
//     res.send(course)
// }

// Insert Many POST

exports.InsertManyProduct = async(req,res)=>{
  try{
  let product = await ProductModel.insertMany(req.body,{ordered:false});
  if(!product) return res.status(404).send("check again")
    res.status(201).send(product);
}catch(err){
  res.status(500).send(err.message)
}
}

// updateProduct
exports.updateProduct = async(req, res)=>{
  try{
    const productId = req.params._id;
    const product = await ProductModel.findByIdAndUpdate(
      productId,
      {
        $set:req.body,
        new:true,
      }
    )
    if(!product) return res.status(404).send("id is invalid");
    res.status(200).send(product)
  }catch(err){
    res.statuss(500).send(err.message);
  }
}

// delete
exports.deleteProduct = async(req, res)=>{
    try{
      const productId = req.params._id;
      const product = await ProductModel.findByIdAndDelete(productId);
      if(!product) return res.status(404).send("invalid id")
        res.send(ProductModel.find());
    }catch(err){
      res.status(500).send(err.send);
    }
}