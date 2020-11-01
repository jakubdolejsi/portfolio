
import mongoose from "mongoose";

let ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    description: { type: String},
    container: { type: String}
})


const Project = mongoose.model('Project', ProjectSchema)
export default Project

