

const express=require("express")
const app=express()
const path=require("path")
const hbs=require("hbs")
const collection=require("./mongodb")

const templatePath=path.join(__dirname,'../templates')
app.use(express.json())
app.set("view engine","hbs")
app.set("views",templatePath)
//helps get monddb data

app.use(express.urlencoded({extended:false}))

app.get("/",(req,res)=>{
    res.render("login")
})

app.get("/signup",(req,res)=>{
    res.render("signup")
})




// when a user puts in the info in sign up it will be collected here\
//when working with mongodb we have to use await functions
//insert many is syntax for mongodb

app.post("/signup",async (req,res)=>{
const data={
    name:req.body.name,
    password:req.body.password
}

const checking = await collection.findOne({ name: req.body.name })
// this checks if the username already exists

try{
 if (checking.name === req.body.name && checking.password===req.body.password) {
     res.send("user details already exists")
 }
 else{
     await collection.insertMany([data])
 }
}
catch{
 res.send("wrong inputs")
}

 res.status(201).render("home", {
     naming: req.body.name
 })

})







app.post("/login",async (req,res)=>{
    //this checks if the user and password are valid
    try{

    const check=await collection.findOne({name:req.body.name})

    if(check.password === req.body.password){
        //if the password is avalid password then it renders home
        res.status(201).render("home", { naming: `${req.body.password}+${req.body.name}` })
    }
    else{
       res.send("wrong password") 
    }

    }

    catch (e) {
        res.send("wrong details")
    }
        
    
    })

app.listen(3000, ()=>{
console.log("port connected");
})