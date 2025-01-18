const mongoose = require('mongoose')

const connectDB= async () =>{
    try {
        mongoose.connect(process.env.MONGO_URI,{
            
        })
    } catch (error) {
        console.log("🚀 ~ connectDB ~ error:", error)
        
    }
}

module.exports= connectDB
