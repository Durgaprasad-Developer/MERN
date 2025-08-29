const mongoose = require('mongoose');

const connectDB = (dbUrl) => {
mongoose.connect(dbUrl)
.then(() => {
  console.log("DB connected");
}).catch((err) => {
  console.log(err);
});
}

module.exports = {connectDB};