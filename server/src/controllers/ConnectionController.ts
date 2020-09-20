import { Request, Response} from 'express';
import db from '../database/connection';
import convertHourToMinutes from '../utils/convertHoursToMinutes';

export default class ConnectionController {
    async index (request: Request, response: Response) {
        const totalCon = await db('connection').count('* as total');

        const { total } = totalCon[0]; // como retorna apenas 1 registro, passa o indice [0], já que totalCon é um [number]

        return response.json({ total });
    }

    async create (request: Request, response: Response) {
        const { user_id } = request.body;

        await db('connection').insert({
            user_id,
        });

        return response.status(201).send();
    }
}