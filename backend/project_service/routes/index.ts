import express from 'express'
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  return res.status(200).send({ body: "ahoj voleee" })
});

export default router;
