const express=require("express");
const path=require("path");
const app=express();
app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"index.html"));
})
app.listen(80,"127.0.0.1",()=>{
    console.log("listen at port 80");
})
console.log(path.resolve(__dirname,"index.html"));