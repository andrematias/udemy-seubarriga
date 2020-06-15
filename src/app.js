const app = require('express')();

app.get('/', (req, res) => {
  res.status(200).send();
});

app.get('/users', (req, res) => {
  const users = [{
    name: 'Matias', email: 'matias@mail.com',
  }];
  res.status(200).send(users);
});

module.exports = app;
