import { createConnection } from 'mysql2';
import { mysqlDateBase } from '../../config';

const connection = createConnection(mysqlDateBase);

connection.connect((err) => {
  if (err) {
    console.error('error connecting: ', err);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

var sql = 'SELECT * FROM psy_activity';
//查
connection.query(sql, function (err, result) {
  if (err) {
    console.log('[SELECT ERROR] - ', err.message);
    return;
  }

  console.log('--------------------------SELECT----------------------------');
  console.log(result && result.length);
  console.log('------------------------------------------------------------');
});

var addSql =
  'INSERT INTO websites(Id,name,url,alexa,country) VALUES(0,?,?,?,?)';
var addSqlParams = ['菜鸟工具', 'https://c.runoob.com', '23453', 'CN'];
//增
connection.query(addSql, addSqlParams, function (err, result) {
  if (err) {
    console.log('[INSERT ERROR] - ', err.message);
    return;
  }

  console.log('--------------------------INSERT----------------------------');
  console.log('INSERT ID:', result);
  console.log(
    '-----------------------------------------------------------------\n\n',
  );
});

connection.end();
