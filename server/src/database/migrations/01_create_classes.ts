import Knex from 'knex';

//add coisas no bd
export async function up(knex: Knex) {
    return knex.schema.createTable('classes', table => {
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.decimal('cost').notNullable();
        
        //relacionamento FK
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')   // atualiza bd em relação a modificação de id, caso o user_id seja modificado
            .onDelete('CASCADE'); // deleta aulas caso o user seja removido da plataforma
    });
}

// reverter bd
export async function down(knex: Knex) {
    return knex.schema.dropTable('classes');
}