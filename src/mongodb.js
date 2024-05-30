/*
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://VitalTrack:VTBackend@vitaltrackbackend.zil9xuq.mongodb.net/?retryWrites=true&w=majority&appName=VitalTrackBackend";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


*/




const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://VitalTrack:VTBackend@vitaltrackbackend.zil9xuq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority&appName=VitalTrackBackend")


.then(()=>{
    console.log('mongoose connected');
})
.catch((e)=>{
    console.log('failed');
})



const logInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection=new mongoose.model('collection',logInSchema)

module.exports=collection
