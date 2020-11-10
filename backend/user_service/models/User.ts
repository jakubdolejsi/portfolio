import mongoose from "mongoose";
import Joi from "joi";
import bcrypt from 'bcryptjs'


let UserSchema = new mongoose.Schema({
    login: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {type: String}
})


// UserSchema.pre('save', async (next) => {
//     // @ts-ignore
//     if (this.isModified('password') || this.isNew) {
//         const salt = await bcrypt.genSalt(10)
//         // @ts-ignore
//         this.password = await bcrypt.hash(this.password, salt)
//     }
//     next()
// })


const ComparePassword = async (password: string, hash: string): Promise<boolean> => {
    return await bcrypt.compare(password, hash)
}

const HashPassword = async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)

}


const registerValidation = (data: object) => {
    const Schema = Joi.object({
        login: Joi.string().min(3).required(),
        email: Joi.string().min(5).email().required(),
        password: Joi.string().min(6).required()
    })
    return Schema.validate(data)
}

const loginValidation = (data: object) => {
    const Schema = Joi.object({
        login: Joi.string().min(3).required(),
        password: Joi.string().min(6).required()
    })

    return Schema.validate(data)
}

const Validation = {
    register: registerValidation,
    login: loginValidation,
    comparePassword: ComparePassword,
    hashPassword: HashPassword
}

const User = mongoose.model('User', UserSchema)

export {
    User,
    Validation
}

