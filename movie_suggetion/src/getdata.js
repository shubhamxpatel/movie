const axios=require('axios')
var data;
async function fun(){
    try {
        data=await axios.get("http://localhost:5000/users")
        console.log((data["data"]))
    } catch (error) {
        console.log("hello")
        console.log(error)
    }
    
        
}
fun();

//data="shubham"
module.export = data