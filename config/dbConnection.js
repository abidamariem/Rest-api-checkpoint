const mongoose=require("mongoose")


const dbConection=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("database connected")
    } catch (error) {
       console.log(error.message) 
    }
}
module.exports=dbConection
