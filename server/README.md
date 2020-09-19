"tsnd --transpile-only --ignore-watch node_modules src/server.ts"

# Anotações

## configs
--transpile-only apenas faz com que o código seja convetido de ts->js, sem verificar erros, com ganho de velocidade
--ignore-watch node_modules faz com que não seja feita conversão de códigos do node_modules, que são feito por 3ª e não o dev aqui
--respawn é um watch basicamente, deixa o server funcionando e verificando

## Rotas, e recursos

|------ rota ------||-- recurso --| 
http:localhost:3333/users

recurso = corpo - (request body): Dados para criação/atiualização de registro

Route Params: recurso dentro da rota:
                          |-- Params --|
http:localhost:3333/users/:id

Query Params: paginação, filtros, ordenação      |---- Query ----|
http:localhost:3333/users/:id?page=2&sort=name


#BD

migrations - controlam a versão do bd

knex precisa ser configurado para rodar typescript, com o arquivo knexfile.ts
knex:migrate é o comando utilizado executar as migrations, definido no scripts do package.json
yarn knex mostra os comandos lá utilizados
é preciso colocar o arquivo em ts, pq ele procura por js "knexfile.ts"