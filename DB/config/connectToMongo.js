const mongoose = require('mongoose')

let isConected

const connectToDd = async () => {
  if(!isConected) {
    mongoose.set('strictQuery', true);
    await mongoose.connect('mongodb+srv://taber:Aa000001@coderhouse.xfpha7a.mongodb.net/ecommerce?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
          isConected = true
          console.log('MongoDB Connected...')})
        .catch(err => console.log(err))   
    return
  }

  console.log("Conexion existente")
  return
}

module.exports = connectToDd 

