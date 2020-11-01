import {Request, Response} from 'express'
import HttpResponse from "../Response/HttpResponse";
import Project from "../models/Project";



const GetAllProjects = async (req: Request, res: Response) => {
    try {
        const proj = await Project.find()
        return HttpResponse.Success(res, proj, 200)
    } catch (err) {
        return HttpResponse.Error(res, err, 500)
    }
}

const GetProjectById = async (req: Request, res: Response) => {
    try {
        const project = await Project.findById(req.params.id)
        console.log('returning project:', project)
        if(project === null) {
            return HttpResponse.Success(res, {}, 200)
        }
        return HttpResponse.Success(res, project, 200)
    } catch (err) {
        return HttpResponse.Error(res, err, 404)
    }
}

const GetProjectByName = async (req: Request, res: Response) => {
    const name = req.params.name

    try {
        const project = await Project.find({name: name})
        return HttpResponse.Success(res, project, 200)
    } catch (err) {
        return HttpResponse.Error(res, err, 404)
    }
}

const CreateProject = async (req: Request, res: Response) => {
    if (!req.body) {
       return HttpResponse.Error(res, 'No data received', 400);
    }
    const {name, description, container} = req.body

    const proj = new Project({
        name: name,
        description: description,
        container: container
    })
    try {
        const saved = await proj.save()
        return HttpResponse.Success(res, saved, 201)
    } catch (err) {
        return HttpResponse.Error(res, 'Creating new project was not successful', 403)
    }
}

export default {
    GetAllProjects,
    GetProjectById,
    CreateProject,
    GetProjectByName,
}
