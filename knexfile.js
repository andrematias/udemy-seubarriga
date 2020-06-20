module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'postgres',
      password: '123',
      database: 'barriga',
    },
    migrations: {
      directory: 'src/migrations',
    },
  },
};
