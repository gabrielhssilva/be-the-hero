const express = require('express');
const routes = express.Router();
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

// ------------ API RESTFULL ------------ //
/*  Tipos de Parâmetros
*
* Query Params: Parâmetros nomeados enviados na rota após "?"
*(servem para filtros, paginação)
*
* Route Params: Parâmetros utilizados para identificar recursos após ":"
*
* Request Body:  Corpo da requisição
*(serve para criar ou alterar recursos)
*
*/

// // GET ( usando Route Params )
// routes.get('/users/:id', (request, response) => {
//     const params = request.params;

//     console.log('Route Params: ', params);

//     return response.json({
//         evento: 'Semana OmniStack 11 :D',
//         aluno: 'Gabriel Sousa'
//     });
// });

// // GET ( usando Query Params - feito pelo Postman/Insomnia)
// routes.get('/users', (request, response) => {
//     const params = request.query;

//     console.log('Query Params: ', params);

//     return response.json({
//         evento: 'Semana OmniStack 11 :D',
//         aluno: 'Gabriel Sousa'
//     });
// });

// // POST / PUT ( com body na chamada - feito pelo Postman/Insomnia)
// routes.post('/users', (request, response) => {
//     const body = request.body;

//     console.log('Body: ', body);

//     return response.json({
//         evento: 'Semana OmniStack 11 :D',
//         aluno: 'Gabriel Silva'
//     });
// });

// (POST) Criar Sessão - Loginn
routes.post('/sessions', SessionController.login);

// (POST) Criar Ong 
routes.post('/ongs', OngController.create);

// (GET) Listar todas as Ongs
routes.get('/ongs', OngController.list);


// (POST) Criar Caso
routes.post('/incidents', IncidentController.create);

// (GET) Listar todos os casos
routes.get('/incidents', IncidentController.list);

// (DELETE) Deletar Caso
routes.delete('/incidents/:id', IncidentController.delete);

// (GET) Listar todos os casos por Ong
routes.get('/profile', ProfileController.listIncidentsByOngID);

module.exports = routes;