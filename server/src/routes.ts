import express from 'express';
import db from './database/connection';
import convertHourToMinutes from './utils/convertHoursToMinutes';

const routes = express.Router();

interface ScheduleItem {
    week_day: string,
    from: string,
    to: string,
}

// criar aulas
routes.post('/classes', async (request, response) => {
    const { name, avatar, whatsapp, bio, subject, cost, schedule } = request.body;

    const insertedUsersIds = await db('users').insert({
        name, avatar, whatsapp, bio
    });

    const user_id = insertedUsersIds[0]

    await db('classes').insert({
        subject, cost, user_id
    });

    const class_id = insertedUsersIds[0]; 

    await db('classes').insert({
        subject, cost, user_id
    });

    const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
        return {
            class_id,
            week_day: scheduleItem.week_day,
            from: convertHourToMinutes(scheduleItem.from),
            to: convertHourToMinutes(scheduleItem.to),
        };
    });

    await db('class_schedule').insert(classSchedule);

    return response.send();
});



export default routes;