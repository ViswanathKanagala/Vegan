const mongoose=require("mongoose")

const Connection=async()=>{
    try{
       await mongoose.connect("mongodb+srv://viswa:32A6Ra9sj2t3Eo85@cluster0.x1jhkub.mongodb.net/WBD?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
        console.log("Database Connected Successfully");
    } catch(err) {
        console.log("Unable to connect to MongoDB. Error: " + err);
      }
}
module.exports= Connection;

// 0.0.0.0:27017
