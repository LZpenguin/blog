const mongoose = require('mongoose');

module.exports = () => {
  mongoose.connect('mongodb://Ninth:lz020726@localhost/blog',{ useUnifiedTopology: true,useNewUrlParser: true })
  .then(() => {
    console.log('数据库连接成功');
  })
  .catch((err) => {
    console.log('数据库连接失败',err);
  })
}