const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()
app.use(express.json())
app.use(cors())


app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"./index.html"))
})






//use port from haroku
const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=>{
    console.log(`Running on port ${PORT}`)
})
