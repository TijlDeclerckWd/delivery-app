const { Product } = require("../models");

const add = async (req, res, next) => {
  try {
    const productData = {title: 'My name e Jief'};

    let product = await Product.create(productData);

    return res.status(200).json({
      message: "New product created!",
      product,
    });
  } catch (err) {
      console.log('error creating product', err);
    // return sendErr(res, err);
  }
};

module.exports = {
  add
}