import mongoose from "mongoose";


const connection = 'mongodb://project_mongodb:27017/project_service';


const connectDb = () => {
    return mongoose.connect(connection, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
}

export default connectDb()
