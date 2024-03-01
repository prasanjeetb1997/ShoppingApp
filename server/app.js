require("dotenv").config();
require("./config/mongodb");
const express = require('express');
const app = express();
const cors = require("cors");


app.use(cors());
app.use(express.json());




app.get('/', async (req, res) => {
    return res.json(data)
})






const port = process.env.PORT
app.listen(port, () => {
    console.log(`Ecommerce app listening on port ${port}`)
})