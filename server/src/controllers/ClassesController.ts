import { Request, Response} from 'express';
import db from '../database/connection';
import convertHourToMinutes from '../utils/convertHoursToMinutes';

interface ScheduleItem {
    week_day: string,
    from: string,
    to: string,
}

export default class ClassesController {
    // listagem
    async index (request: Request, response: Response) {
        const filters = request.query;

        const week_day = filters.week_day as string;
        const subject = filters.subject as string;
        const time = filters.time as string;

        if (!filters.week_day || !filters.subject || !filters.time) {
            return response.status(400).json({
                error: 'Falta passar filtros p/ classes'
            });
        }

        const timeInMinutes = convertHourToMinutes(time);

        const classes = await db('classes')
            .whereExists(function() {
                this.select('class_schedule.*')
                    .from('class_schedule')
                    .whereRaw('`class_schedule`.`class_id` = `classes`.`id`') //recomendado para se usar no whereExists; ´´ é para representar tabelas
                    .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)]) // ?? parâmetro
                    .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
                    .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes])
            })
            .where('classes.subject', '=', subject)
            .join('users', 'classes.user_id', '=', 'users.id')
            .select(['classes.*', 'users.*']); // é em array, pq retorna todoas as classes
        
        
            return response.json(classes);

    }

    async create (request: Request, response: Response) {
        const { name, avatar, whatsapp, bio, subject, cost, schedule } = request.body;
    
        const trx = await db.transaction();
    
        try {
            const insertedUsersIds = await trx('users').insert({
                name, avatar, whatsapp, bio
            });
        
            const user_id = insertedUsersIds[0]
        
            await trx('classes').insert({
                subject, cost, user_id
            });
        
            const class_id = insertedUsersIds[0]; 
        
            const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
                return {
                    class_id,
                    week_day: scheduleItem.week_day,
                    from: convertHourToMinutes(scheduleItem.from),
                    to: convertHourToMinutes(scheduleItem.to),
                };
            });
        
            await trx('class_schedule').insert(classSchedule);
        
            // momento em que todas as alterações vão para o bd
            await trx.commit();
        
            return response.status(201).send();
            
        } catch (error) {
            console.log(error);
            // desfaz alteração em caso de erro
            await trx.rollback();
            return response.status(400).json({
                error: 'Erro ao criar uma aula'
            });
        }
    }
}