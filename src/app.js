const app = require('express')();
const consign = require('consign');
const knex = require('knex');
const knexfile = require('../knexfile');

// TODO Criar chaveamento dinâmico
app.db = knex(knexfile.development);

consign({ cwd: 'src', verbose: false })
  .include('./config/midlewares.js')
  .then('./routes')
  .then('./config/routes.js')
  .into(app);

app.get('/', (req, res) => {
  res.status(200).send();
});

module.exports = app;
