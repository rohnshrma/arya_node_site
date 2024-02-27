const express = require("express")
const app = express()

const PORT = 5000


// create local server

app.listen(PORT,()=>{
    console.log("server started on port",PORT)
})