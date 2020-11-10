import mongoose from "mongoose";


const connection = 'mongodb://user_mongodb:27018/user_service';

const connectDb = () => {
    return mongoose.connect(connection, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
}

export default connectDb()
