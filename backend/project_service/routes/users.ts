import express from 'express'
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  return res.status(200).send("axxa");
});

export default router;