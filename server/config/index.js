import doenv from 'dotenv';
doenv.config();
const BACKEND_SERVER_PATH = process.env.BACKEND_SERVER_PATH;
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;
const HASH_PASSWORD_SECRET = process.env.HASH_PASSWORD_SECRET;
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;
export { 
    BACKEND_SERVER_PATH,
    PORT,
    MONGO_URI,
    HASH_PASSWORD_SECRET,
    ACCESS_TOKEN_SECRET,
    REFRESH_TOKEN_SECRET
 };
