import {Response} from "express";

const HttpResponse = {
    Success(res: Response, data: string | object, code: number = 200): Response {
        const dataToSend = {
            body: data,
            timeStamp: new Date(),
        };
        return res.status(code).send(dataToSend);
    },
    Error(res: Response, errorMessage: string | object, code: number): Response {
        const dataToSend = {
            message: errorMessage,
        };
        return res.status(code).send(dataToSend);
    }
}


export default HttpResponse
