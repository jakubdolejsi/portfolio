import {Request, Response, NextFunction} from "express";


const InvalidUrl = (req: Request, res: Response, next: NextFunction) => {
    return res.status(404).send(
        {
            message: 'Invalid Url'
        }
    )
}

export default InvalidUrl
