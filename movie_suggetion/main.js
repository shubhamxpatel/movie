const express=require('express')
const app=express()
const router=express.Router();
const path=require('path')

//app.use("/",router)
app.use(express.static(path.join(__dirname,'public')))
app.use(express.static(path.join(__dirname,"src")))
app.get('/',function(err,req,res){
    console.log("hello")
if(err) throw err
res.send("hello")
})
app.get('/index',function(err,req,res){
    if(err) throw err
    res.sendFile(path.join(__dirname,'public','index.html'))
})
app.listen(7777);
console.log("connection")