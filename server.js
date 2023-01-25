const mongoose = require('mongoose')
const port = 3001
const app = require('./app')
const dotenv = require('dotenv');
dotenv.config();


const API = "mongodb+srv://Raj-97:Rajababu@cluster0.0ovkc3x.mongodb.net/?retryWrites=true&w=majority"
async function main(){
await mongoose.connect(API)
  .then(() => console.log('Connected!'))
  
app.listen(port , ()=>console.log("Server is Running..."))
}
main()