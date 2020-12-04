var MongoCLient=require('mongodb').MongoClient
async function main(){
    var uri="mongodb://localhost:27017/"
    var client=await MongoCLient.connect(uri,{useUnifiedTopology:true,useNewUrlParser:true})
    try {
       //await client.connect();
       var cursor=client.db("test").collection("user").find()
       const allvalue=await cursor.toArray();
       console.log(allvalue)
       const data1=allvalue.name
       console.log(data1)
       cursor=client.db("test").collection("users").find()
       
       const allvalue1=await cursor.toArray();
       console.log(allvalue1)
       
       
    } catch (error) {
        console.log(error)
    }finally{
        client.close()
    }
    

}
main().catch(console.err)