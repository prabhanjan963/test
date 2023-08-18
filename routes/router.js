import { sendUser } from '../controller/controller.js';
import express from 'express'
const routes = express.Router();

routes.post('/',sendUser)


export default routes;