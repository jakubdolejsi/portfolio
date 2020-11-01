
import mongoose from "mongoose";

let UserSchema = new mongoose.Schema({
    firstName: { type: String},
    lastName: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    password: { type: String}
})


const User = mongoose.model('User', UserSchema)
export default User

