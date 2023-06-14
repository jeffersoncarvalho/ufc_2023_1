var mongoose = require("mongoose")
var mongoDB_URI = "mongodb://127.0.0.1:27017/piw"
mongoose.connect(mongoDB_URI,{useNewUrlParser:true})
var db = mongoose.connection

db.on("connected",()=>console.log("Mongo Conectado em " + mongoDB_URI))
db.on("disconnected",()=>console.log("Mongo Desconectado em " + mongoDB_URI))
db.on("error",(error)=>console.log("Mongo Erro: " + error))


