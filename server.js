require('dotenv').config({path: "./config.env"})
const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')

const connectDB = require('./config/db')
connectDB();
mongoose.promise = global.Promise
const app = express()
const cors = require('cors')



app.use(express.json())
app.use(express.urlencoded({
extended:true
}));



app.use(cookieParser())
app.use(cors())

app.get('/',async (req,res)=>{
    res.status(200).send("Hello")
})

app.use("/api/auth",require("./routes/auth"))
app.use("/api/private",require("./routes/private"))


app.use("/api/prod",require("./routes/product"))
app.use("/api/cart",require("./routes/cart"))


app.use("/api/rev",require("./routes/reviews"))
app.use("/api/wish",require("./routes/wishlist"))


app.use("/api/show",require("./routes/showcase"))


const port = process.env.PORT || 3001;

const server = app.listen(port,()=>{
    console.log(`Server running on port ${port}`)   
})

process.on('unhandledRejection',(err,promise)=>{
    console.log(`Logged error ${err}`)
    server.close(()=>process.exit(1));
})

