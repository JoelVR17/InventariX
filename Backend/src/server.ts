import express from 'express'
import router from './router'
import db from './config/db'

// Connect to DB
const connectDB = async () => {

    try {
        
        await db.authenticate()
        db.sync()
        console.log('Successful connection');

    } catch (error) {
        console.log(error);
        console.log('Error to connect DB');
    }
}

connectDB()

const server = express()

server.use('/api/products', router)

export default server