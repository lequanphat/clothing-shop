import express, { json } from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import routes from './routes/index.js';
import auth from './middlewares/auth.js';
import errorHandler from './middlewares/error.js';
// express app
const app = express();
dotenv.config();

// middlewares
app.use(json());
app.use(cookieParser());
app.use(auth.checkTokenUser);

routes(app);
app.use(errorHandler);

// connect to db
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        // run port
        app.listen(process.env.PORT, () => {
            console.log(`[${process.env.PORT}]running`);
        });
    })
    .catch((error) => {
        console.log(error.message);
    });
