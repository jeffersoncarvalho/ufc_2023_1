var mongoose = require("mongoose")
var mongoDB_URI = "mongodb://127.0.0.1:27017/webt03"
mongoose.connect(mongoDB_URI,{useNewUrlParser:true})
var db = mongoose.connection

db.on("connected",()=>console.log("MongoDB conectado a " + mongoDB_URI))
db.on("disconnected",()=>console.log("MongoDB desconectado de " + mongoDB_URI))
db.on("error",(error)=>console.log("MongoDB erro: " + error))