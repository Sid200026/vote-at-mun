/**
 * make appropriate changes according to your own dbms
 */

exports.config = {
  debug: true,
  port: 4000,
  postgres: {
    host: 'localhost',
    username: 'postgres',
    password: '0000',
    database: 'vitcmun',
    port: 5432,
  },
  errorLogFile: 'log/errors.txt',
  debugLogFile: 'log/debug.txt',
  infoLogFile: 'log/info.txt',
  jwtSecretKey: 'vote@mun2020',
  saltRounds: 10,
};
