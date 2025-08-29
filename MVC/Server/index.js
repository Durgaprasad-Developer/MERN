const express = require("express")
require("module-alias/register")
require('dotenv').config()
const {connectDB} = require("./dbConfig")
const productRoutes = require("./routes/productRoutes.js")
const userRoutes = require('./routes/UserRoutes')


const app = express()

app.use(express.json())
connectDB(process.env.dbUrl)

app.use('/products', productRoutes)
app.use('/users',userRoutes)


app.get('/', (req, res)=>{
    res.send("Hello from the server")
})
app.listen(8081, ()=>{
    console.log("Server Started");
})