var express = require('express');
var router = express.Router();
var path=require('path')
var fileupload=require('express-fileupload')

//console.log(path.join(__dirname,'../public'))
var conn = require("../public/javascripts/connect.js")
var ans=""
router.use(fileupload())
/* GET users listing. */
async function fun(image,req,response){
    console.log(image.name)
    let check=await conn.collection("login").find({"user":req.body.email})
    let r=await check.toArray()
    //console.log(r.length)
    if(r.length===0){
        
        await conn.collection("user_image").insertOne({"img":image.name}).then(async res2=>{
            let id=res2["ops"][0]._id
            console.log(id)
            const up_path=path.join(__dirname,'../../back/public/images/')
            console.log(up_path)
            let ext=image.name.split(".")
            let title=ext[ext.length-1]
            await image.mv(`${up_path}${id}.${title}`).then(async ()=>{
                await conn.collection("login").insertOne({"user":req.body.email,"pass":req.body.pass,"img":`/images\/${id}.${title}`,"logStatus":0})
                .then(res=>{
                    console.log("Registration Successful")  
                    response.send({"res":"Registration Successful!","imgurl":`images\/${id}.${title}`})
                })
                .catch(err=>{
                    response.send(err)
                })
                
            }).catch(err=>{
                console.log(err)
                response.send({"res":"image uploading failed retry1"})
            })
        })
        .catch(err=>{
            response.send({"res":"image uploading failed retry2"})
        })
        
    }
    else{
        response.send({"res":"email already registered"})
    }
    
	//console.log(p["ops"])
	//ans = p["ops"]
}
router.post('/', function(req, res, next) {
  if(req.files=== null)
  {
      console.log("null files")
  }
  const image=req.files.image
  //console.log(image)
  //console.log(req.files.image.name)
  //console.log(req.body.email)
  //res.send({"res":"Registration Successful!"})
  fun(image,req,res)
  //console.log(ans)
  //res.send(ans);
  //console.log(res)
});

module.exports = router;
