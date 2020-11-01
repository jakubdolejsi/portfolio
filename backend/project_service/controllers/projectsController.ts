import {Request, Response} from 'express'
import HttpResponse from "../Response/HttpResponse";
import ProjectsModel from "../models/ProjectsModel";


const GetAllProjects =  async (req: Request, res: Response) => {
    await ProjectsModel.FindAll().then((data)=>{
        return HttpResponse.Success(res, data, 200)
    }).catch( (err) => {
        return HttpResponse.Error(res, err, 404)
    })
}

const GetProjectById = async (req: Request, res: Response) => {
    const id = Number(req.params.id)

    if (!id) {
        return HttpResponse.Error(res, 'Project ID must be a number', 404)
    }

    await ProjectsModel.FindOne(id).then( (data) => {
        return HttpResponse.Success(res, {data: data}, 200)
    }).catch( (err) => {
        return HttpResponse.Error(res, err, 404)
    })
}

const Invalid = async (req: Request, res: Response) => {
    return HttpResponse.Error(res, 'Invalid URL', 404)
}


export default {
    GetAllProjects,
    GetProjectById,
    Invalid,
}
