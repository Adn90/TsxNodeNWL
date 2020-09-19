import knex from 'knex';
import path from 'path'; // navegar por dir no node

const db = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite'), //__dirname retorna diretório, e criar um arquivo database.sqlite
    },
    useNullAsDefault: true,
});

export default db;