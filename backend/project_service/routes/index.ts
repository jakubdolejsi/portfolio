import express from 'express'
const router = express.Router();
import InvalidUrl from "../Response/InvalidUrl";


/* ---------------------------------------------------------------------------------------------------------
| Import all controllers                                                                                   |
|  ---------------------------------------------------------------------------------------------------------
*/
import projectsController from "../controllers/projectsController";

/* ---------------------------------------------------------------------------------------------------------
|  GET home page.                                                                                          |
| Server as health check                                                                                   |
|  ---------------------------------------------------------------------------------------------------------
*/
router.get('/', (req, res, next) => {
  return res.status(200).send({ body: "Healthy!" })
});



/* ---------------------------------------------------------------------------------------------------------
|  Project router                                                                                          |
|  Project router is responsible for routing to all endpoints that are managing projects                   |                                                                                     |
|                                                                                                          |
| ---------------------------------------------------------------------------------------------------------
*/
router.get( '/project', projectsController.GetAllProjects)
router.post( '/project', projectsController.CreateProject)
router.get( '/project/:id', projectsController.GetProjectById)


/* ---------------------------------------------------------------------------------------------------------
| Default error endpoint                                                                                   |
| ----------------------------------------------------------------------------------------------------------
*/
router.get('*', InvalidUrl)

export default router;
