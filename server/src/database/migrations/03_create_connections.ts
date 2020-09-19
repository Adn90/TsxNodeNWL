import Knex from 'knex';

//add coisas no bd
export async function up(knex: Knex) {
    return knex.schema.createTable('connection', table => {
        table.increments('id').primary();
        
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')   // atualiza bd em relação a modificação de id, caso o user_id seja modificado
            .onDelete('CASCADE'); // deleta aulas caso o user seja removido da plataforma

            table.timestamp('created_at')
                .defaultTo('now()')
                .notNullable();
    });
}

// reverter bd
export async function down(knex: Knex) {
    return knex.schema.dropTable('connection');
}