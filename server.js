const express=require('express')
const app=express()
const port=5000;

// Define the basic route
app.get('/',(req,res)=>{
    res.send("Hello Express!!!")
})

//Start the server
app.listen(port,()=>{
    console.log(`Server started at Port no ${port}`)
})