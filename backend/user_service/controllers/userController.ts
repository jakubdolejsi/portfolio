import {Request, Response} from 'express'
import HttpResponse from "../Response/HttpResponse";
import User from "../models/User";
import fetch from 'node-fetch'


const GetUserById = async (req: Request, res: Response) => {
    //test calling project service
    const response = await fetch('http://project_service:3000/api/project/5f9f32cda1b0030f40b1c28a')
    const data = await response.json()

    return HttpResponse.Success(res, data, 200)

}

const UpdateUserById = async (req: Request, res: Response) => {

}

const CreateUserById = async (req: Request, res: Response) => {
    const {name} = req.body
    const user = User.find()
    return HttpResponse.Success(res, name, 201)
}

const DeleteUserById = async (req: Request, res: Response) => {

}

export default {
    GetUserById,
    CreateUserById,
    UpdateUserById,
    DeleteUserById,
}
