const {model,db}=require('./movie')
async function main(){
var cursor=await db.collection("user1").find()
const allvalue=await cursor.toArray();
console.log(allvalue)
allvalue.forEach((val)=>{
    console.log(val)
})
// model.insertMany([{name:"sp",_id:Math.random()*100,sr:[{class:2,roll:5},{class:12,roll:56}]}]).then((doc)=>{

//     var name=doc


//     console.log(name)


    
//     db.close();
// }).catch(err=>console.log(err))
}
main();
