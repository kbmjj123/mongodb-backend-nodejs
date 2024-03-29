const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, '请维护品牌名称']
  }
});

const brandModel = mongoose.model('brandModel', brandSchema, 'brands');

module.exports = brandModel;