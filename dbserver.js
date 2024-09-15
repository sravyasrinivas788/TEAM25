const mongoose=require('mongoose')
const URL='mongodb+srv://vikranthpadidam:iYF0p9er7ithjX5y@cluster0.i7qbox7.mongodb.net/testmongo?retryWrites=true&w=majority'

mongoose.connect(URL,{useNewUrlParser: true, useUnifiedTopology: true,})
const con=mongoose.connection
con.on('connected',()=>{
    console.log("connected")
})
con.on('error',()=>{
    console.log("error")
})
