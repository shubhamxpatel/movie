const connection=require('mongoose');
connection.connect("mongodb://localhost:27017/shubham",{useNewUrlParser : true,useUnifiedTopology: true})
.then(()=>console.log("connection established")).catch(()=> console.log("connection error"));
console.log(connection.shubham.showdbs);
