import {NextFunction, Request, Response} from 'express'
import HttpResponse from "../Response/HttpResponse";
import {User, Validation} from "../models/User";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const GetUser = async (req: Request, res: Response, next: NextFunction) => {
    const {email} = req.params
    const query = {'email': email}


    return User.findOne(query, (err, user) => {
        if (err) {
            return HttpResponse.Error(res, err, 404)
        }
        if (!user) {
            return HttpResponse.Error(res, `User with email: ${email} not found`, 404)
        }
        return HttpResponse.Success(res, user, 200)
    })
}

const UpdateUser = async (req: Request, res: Response) => {
    const {error} = Validation.login(req.body)
    if (error) {
        return HttpResponse.Error(res, error.details[0].message, 400)
    }

    const user = await User.findOne({login: req.body.login})
    if (!user) {
        return HttpResponse.Error(res, `User with login ${req.body.login} not found`, 404)
    }
}


const LoginUser = async (req: Request, res: Response) => {
    const {error} = Validation.login(req.body)
    if (error) {
        return HttpResponse.Error(res, error.details[0].message, 400)
    }
    const user = await User.findOne({login: req.body.login}, 'password')
    if (!user) {
        return HttpResponse.Error(res, `User with login ${req.body.login} does not exists`, 400)
    }

    const password = req.body.password

    try {
        // @ts-ignore
        const validPassword = await Validation.comparePassword(password, user.password)
        console.log('password: ', validPassword)
        if (!validPassword) {
            return HttpResponse.Error(res, 'Wrong password', 400)
        }
        const secret = process.env.JWT_TOKEN
        // @ts-ignore
        const token = jwt.sign({_id: user._id}, secret)
        res.header('auth-token', token)

        return HttpResponse.Success(res, token, 200)

    } catch (e) {
        console.log('exception:', e)
        return HttpResponse.Error(res, password, 400)
    }

}

const CreateUser = async (req: Request, res: Response) => {
    const {error} = Validation.register(req.body)
    if (error) {
        return HttpResponse.Error(res, error.details[0].message, 400)
    }
    const userExists = await User.findOne({email: req.body.email})
    if (userExists) {
        return HttpResponse.Error(res, `User with email ${req.body.email} already exists.`, 400)
    }

    const hashedPassword = Validation.hashPassword(req.body.password)
    const user = new User({
        login: req.body.login,
        email: req.body.email,
        password: hashedPassword
    })
    try {
        await user.save();
        return HttpResponse.Success(res, {user: user._id}, 201)
    } catch (e) {
        return HttpResponse.Error(res, 'Cannot create user', 400)
    }
}

const DeleteUser = async (req: Request, res: Response) => {

}

export default {
    GetUser,
    CreateUser,
    UpdateUser,
    DeleteUser,
    LoginUser
}
