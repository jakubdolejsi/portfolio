import express from 'express'
import projectsController from "../controllers/projectsController";
const router = express.Router();


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
router.get( 'project/', projectsController.GetAllProjects)
router.get( 'project/:id', projectsController.GetProjectById)


/* ---------------------------------------------------------------------------------------------------------
| Default error endpoint                                                                                   |
| ----------------------------------------------------------------------------------------------------------
*/
router.get('*', (req, res, next) => {
  return res.status(404).send({
    message: 'URL not found'
  })
})

export default router;
