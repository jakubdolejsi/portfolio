import jwt from 'jsonwebtoken'
import {NextFunction, Request, Response} from "express";
import HttpResponse from "../Response/HttpResponse";
import dotenv from 'dotenv'
dotenv.config()

const authRequired = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('auth-token')
    if(!token) {
        return HttpResponse.Error(res, 'Access Denied', 401)
    }
    try {
        const secret = process.env.JWT_TOKEN
        // @ts-ignore
        req.user = jwt.verify(token, secret)
        next()
    } catch (e) {
        return HttpResponse.Error(res, 'Invalid Token', 400)
    }
}

export default authRequired
