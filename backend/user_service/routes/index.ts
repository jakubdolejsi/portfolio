import express from 'express'
const router = express.Router();
import InvalidUrl from "../Response/InvalidUrl";
import authRequired from '../middleware/TokenVerify'

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
router.get( '/user/:email', authRequired, userController.GetUser)
router.post( '/user/', userController.CreateUser)
router.put( '/user/', authRequired, userController.UpdateUser)
router.delete( '/user/', authRequired,  userController.DeleteUser)

router.post('/login/', userController.LoginUser)


/* ---------------------------------------------------------------------------------------------------------
| Default error endpoint                                                                                   |
| ----------------------------------------------------------------------------------------------------------
*/
router.get('*', InvalidUrl)

export default router;
