const { Client } = require('pg')
// const client = new Client({
//   user: 'user1',
//   host: 'postgresql-126832-0.cloudclusters.net',
//   database: 'trial',
//   password: '12345678',
//   port: 17908,
// })
// client.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

const dotenv=require('dotenv')
const express=require('express')
const app=express()
const cors = require('cors')
const session = require('express-session')
const PORT= process.env.PORT_ONE || 7070;
dotenv.config({path:'config.env'});
const axios=require('axios')
const mongoose=require('mongoose')
const MongoDBStore = require('connect-mongodb-session')(session)

const User=require("./data");
mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connection to MongoDB successfull...")).catch((err) => console.log("Unable to connect to MongoDB...", err));


// setting up connect-mongodb-session store
const mongoDBstore = new MongoDBStore({
    uri: process.env.DATABASE_CONNECTION_STRING,
    collection: 'localSessions',
})
app.use(express.json());
app.use(cors())
app.post("/github",async(req,res)=>{
    const {url}=req.body;
    const data=await axios.get(url).then(response=>{console.log("hello")
                              const data=response.data
                            //   console.log(data)
                              return response.data})
    .catch(err=> {return err})
    for(var d in data){
        const userExists=await User.findOne({id:data[d].id})
        if(!userExists){
        const newUser=new User(data[d]);
        newUser.save()
        }
    }
    res.json({message:"success"})
   
   
});
app.get("/github/:id",async function(req,res){
    const user=await User.findOne({id:req.params.id})
    if(user)
    res.json({data:user})
    else{
        res.json({data:null})
    }
    //req.query("id") /github?id=5
})

app.listen(PORT,()=>{
    console.log(`Internship assignment Service at ${PORT}`);
});