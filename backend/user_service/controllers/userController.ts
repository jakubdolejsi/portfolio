import {Request, Response} from 'express'
import HttpResponse from "../Response/HttpResponse";
import User from "../models/User";
import { KafkaClient as Client } from 'kafka-node';


const GetUserById = async (req: Request, res: Response) => {
    //test calling project service
    const kafkaHost = 'localhost:3003'
    const client = new Client({ kafkaHost });

    const data = {
        testData: 'asdas'
    }
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
