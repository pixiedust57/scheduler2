const express = require('express')
const test = express()
const bodyParser = require('body-parser')

const { default: mongoose } = require('mongoose')





constmongoose = require('mongoose')
require('./Users')

test.use(bodyParser.json())



const Users = mongoose.model("user")


const mongoUri = "mongodb+srv://ikarthiki:Marshmello57@cluster1.a7y6b.mongodb.net/schedule2?retryWrites=true&w=majority"

mongoose.connect(mongoUri,{
    useNewUrlParser:true,
})

mongoose.connection.on("connected",()=>{
    console.log("Connected to mongo")
})

mongoose.connection.on("error",(err)=>{
    console.log("error",err)
})

test.get('/',(req,res)=>{
    Users.find({

    }).then(data=>{
        res.send(data)
    }).catch(err => {
        console.log(err)
   
})
})

test.post('/send-data',(req,res)=>{
//console.log(req.body) // what u get in front end u get in this 'body'
const uservar = new Users({
    name:req.body.name,
    link:req.body.link,
    phno:req.body.phno,
    picture:req.picture
})
uservar.save()
.then(data=>{
    console.log(data)
    res.send(data)
}).catch(err => {
    console.log(err)
})

})

test.post('/delete',(req,res) =>{
    Users.findByIdAndRemove(req.body.id)
    .then(data =>{
        console.log(data)
        res.send(data)
    })
    .catch(err => {
        console.log(err)
    })
})

test.post('/update',(req,res) =>{
    Users.findByIdAndUpdate(req.body.id,{
        name:req.body.name,
        email:req.body.email,
        phno:req.body.phno,
        picture:req.picture
}).then (data =>{
    console.log(data)
    res.send(data)
}) 
.catch(err => {
    console.log(err)
})
})


test.listen(3000,() =>{
    console.log("server running")
})