import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionController from './controllers/ConnectionController';


const routes = express.Router();

const classesControllers = new ClassesController;
const connectionControllers = new ConnectionController;


// criar aulas
routes.post('/classes', classesControllers.create);
routes.get('/classes', classesControllers.index);

routes.post('/connections', connectionControllers.create);
routes.get('/connections', connectionControllers.index);



export default routes;