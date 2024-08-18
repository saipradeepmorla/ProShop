import express from "express";
import dotenv from 'dotenv'
dotenv.config()
import connectDB from "./config/db.js"
import productRoutes from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import cors from 'cors'

const port = process.env.PORT
connectDB()
const app = express()
app.use(cors())

app.use(express.json())

app.get('/',(req, res) =>{
    res.send('api is running...')
})

app.use('/api/products',productRoutes)



app.use(notFound)
app.use(errorHandler)

app.listen(port, ()=>{console.log(`server running on port ${port}`)})