const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model.bind(mongoose);
const ObjectId = mongoose.Schema.Types.ObjectId;

const productSchema = Schema({
  id: ObjectId,
  name: String,
  image: String,
  price: Number,
  description: String,
  manufacturer:{
    type: ObjectId,
    ref: 'Manufacturer',
    //ref类似于其他数据库的外键，允许一对多
  }
})

const manufacturerSchema = Schema({
  id: ObjectId,
  name: String,
})

const Product = model('Product', productSchema);
const Manufacturer = model('Manufacturer', manufacturerSchema);

module.exports = { Product, Manufacturer};