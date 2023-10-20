import express, { json } from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import productsRouter from './routes/products.js'
import usersRouter from './routes/users.js'
// express app
const app = express()
dotenv.config()
app.use(json())
// 
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // hoặc '*'
//     res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     next();
//   });
// middewares
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next()
})
app.use('/products', productsRouter)
app.use('/users/', usersRouter)

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then( ( ) => {
        // run port
        app.listen(process.env.PORT, ()=>{
            console.log(`[${process.env.PORT}]running`);
        })
    })
    .catch((error) => {
        console.log(error.message);
})
