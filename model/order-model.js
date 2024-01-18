const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  createTime: {
    type: Date,
    required: [true, '请维护订单创建时间']
  },
  products: {
    type: Array[mongoose.SchemaTypes.ObjectId],
    valiate: {
      validator: function(val){
        return val && val.length > 0
      },
      message: props => `${props.value}必须至少包含一个`
    }
  },
  amount: {
    type: Number,
    min: 0
  },
  beneficAmount: {
    type: Number,
    min: 0
  },
  payAmount: {
    type: Number,
    min: 0
  },
  payTime: Date,
  cancelTime: Date,
  finishTime: Date,
  deliveryTime: Date,
  remark: String
});

const orderModel = mongoose.model('orderModel', orderSchema, 'orders')