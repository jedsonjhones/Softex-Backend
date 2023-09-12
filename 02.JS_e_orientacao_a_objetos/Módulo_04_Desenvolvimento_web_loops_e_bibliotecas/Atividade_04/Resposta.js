const mysql = require('mysql');

const dbConfig = {
    host: 'localhost', 
    user: 'jedson', 
    password: 'jedson', 
    database: 'test',
    port: 3306
  };


const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conexão bem-sucedida com o banco de dados.');
  }
});
