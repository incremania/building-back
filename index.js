require('dotenv').config()
const express = require('express');
const app = express();
const userRoute = require('./routes/user')
const mongoose = require('mongoose')
const cors = require('cors')
app.use(express.json())
app.use(cors())

app.use(userRoute)


app.use((req, res) => res.send('invalid route'))

mongoose.connect('mongodb://localhost:27017/building', {
    family: 4
})


const port = 6080 || process.env.PORT
app.listen(port, () => {
    console.log(`listening to port ${port}`)
})