import express, { json } from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import routes from './routes/index.js'

// express app
const app = express()
dotenv.config()
app.use(json())

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next()
})
routes(app)


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
