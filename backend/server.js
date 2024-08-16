import express from "express";
import dotenv from 'dotenv'
dotenv.config()
import products from './data/products.js'
import cors from 'cors'

const port = process.env.PORT
const app = express()
app.use(cors())

app.use(express.json())

app.get('/',(req, res) =>{
    res.send('api is running...')
})
app.get('/api/products', (req, res) => {
    res.json(products)
})
app.get( '/api/products/:id', (req, res) =>{
    const product = products.find( (p) => p._id === req.params.id )
    res.json(product)
} )


app.listen(port, ()=>{console.log(`server running on port ${port}`)})