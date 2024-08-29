import express from "express";
import dotenv from 'dotenv'
import cookieParser from "cookie-parser";
dotenv.config()
import connectDB from "./config/db.js"
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import cors from 'cors'

const port = process.env.PORT
connectDB()
const app = express()
app.use(cors())

// body parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// cookie parser middleware
app.use(cookieParser())

app.get('/',(req, res) =>{
    res.send('api is running...')
})

app.use('/api/products',productRoutes)
app.use('/api/users',userRoutes)



app.use(notFound)
app.use(errorHandler)

app.listen(port, ()=>{console.log(`server running on port ${port}`)})