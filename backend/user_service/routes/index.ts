import express from 'express'
const router = express.Router();
import InvalidUrl from "../Response/InvalidUrl";


/* ---------------------------------------------------------------------------------------------------------
| Import all controllers                                                                                   |
|  ---------------------------------------------------------------------------------------------------------
*/
import userController from "../controllers/userController";

/* ---------------------------------------------------------------------------------------------------------
|  GET home page.                                                                                          |
| Server as health check                                                                                   |
|  ---------------------------------------------------------------------------------------------------------
*/
router.get('/', (req, res, next) => {
  return res.status(200).send({ body: "Healthy!" })
});



/* ---------------------------------------------------------------------------------------------------------
|  User router                                                                                          |
|  User router is responsible for routing to all endpoints that are managing projects                   |                                                                                     |
|                                                                                                          |
| ---------------------------------------------------------------------------------------------------------
*/
router.get( '/user/:id', userController.GetUserById)
router.post( '/user/:id', userController.CreateUserById)
router.put( '/user/:id', userController.UpdateUserById)
router.delete( '/user/:id', userController.DeleteUserById)


/* ---------------------------------------------------------------------------------------------------------
| Default error endpoint                                                                                   |
| ----------------------------------------------------------------------------------------------------------
*/
router.get('*', InvalidUrl)

export default router;
