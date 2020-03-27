const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();

// Informar que vai ser usado JSON para as requisições
app.use(express.json());
app.use(routes);

// Permitir Cors
app.use(cors());

// Abrir porta para escuta
app.listen(3333);

// ------------ Banco de Dados ------------ //
/*  Tipos de Query
*
* Driver: SELECT * FROM users
* Query Builder: table('users').select('*').where()
*
*/

// Utilizamos SQLite3 para criação de banco de dados
// Utilizamos KNEX.js para Query Builder

// Observações sobre Arquivos
/**
 * --> knexfile.js
 *      |-> Onde ficam as configurações de ambiente de banco.
 * 
 */

