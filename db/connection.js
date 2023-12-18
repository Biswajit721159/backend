const mongoose = require("mongoose");
const connectDB = async () => {
    // console.log(process.env.MONGODB_URI)
    try {
        try{
            let res=await mongoose.connect('mongodb+srv://biswajit2329:T1voipAip4RSgv97@cluster0.fw5wwvc.mongodb.net/e-comm?retryWrites=true&w=majority');
            console.log(`\nMongoDB connected`);
        }catch{
            console.log("we find some error")
        }
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1)
    }
}

module.exports = connectDB;