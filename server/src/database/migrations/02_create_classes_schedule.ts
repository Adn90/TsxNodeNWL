import Knex from 'knex';

//add coisas no bd
export async function up(knex: Knex) {
    return knex.schema.createTable('class_schedule', table => {
        table.increments('id').primary();
        
        table.integer('week_day').notNullable();
        table.integer('from').notNullable();
        table.integer('to').notNullable();
        
        //relacionamento FK
        table.integer('class_id')
            .notNullable()
            .references('id')
            .inTable('classes')
            .onUpdate('CASCADE')   // atualiza bd em relação a modificação de id, caso o user_id seja modificado
            .onDelete('CASCADE'); // deleta aulas caso o user seja removido da plataforma
    });
}

// reverter bd
export async function down(knex: Knex) {
    return knex.schema.dropTable('class_schedule');
}