const mongoose = require('mongoose');

module.exports = () => {
  try{
    const conn = mongoose.connect(process.env.MONGODB_URL);
    mongoose.connection.on('connected', () => console.info('数据库连接成功～～'));
  }catch(error){
    console.error(error)
  }
}