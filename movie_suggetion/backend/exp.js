const express=require('express')
const app=express()
const router=express.Router()
const path=require('path')
app.use('/',router)
app.listen(3001);
app.set("view engine","ejs")
app.set("views",path.join(__dirname,'views'))
app.use("/users/",router.get('/',function(req,res,next){
    //console.log(err)
    res.json({
        user:["user1","user3"]
    })
    next()
}))