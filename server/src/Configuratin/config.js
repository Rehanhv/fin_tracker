const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/finan_trac",{

})

mongoose.connection.on("connected", ()=>{
    console.log("Connected to MongoDB");
})

mongoose.connection.on("error",(err)=>{
    console.error(`MongoDB Connection error: ${err}`)
})
module.exports = mongoose;