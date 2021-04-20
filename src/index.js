// required packages 
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
//modules
import { connectDb } from './db';
import v1Routes from './routes/v1/api';
import { responseHandler } from './utils/ResponseHandler';
import { storeAdminDetail } from './seeder/AdminSeed'

const app = express();
const env = dotenv.config().parsed;

app.use(morgan('dev'));//
app.use(cors());
app.use(express.json());
app.use(responseHandler);
// connect to db
connectDb();
// to store admin details
storeAdminDetail();
// api router
app.use('/api/v1', v1Routes);
// to start server
app.listen(env.PORT, () => {
	console.log(`Started on port ${env.PORT}`);
});
