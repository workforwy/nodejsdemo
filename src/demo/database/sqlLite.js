const sqlite3 = require('sqlite3').verbose();
// sqlites数据库地址
const sqliteDbPath = '/Users/wy/AndroidProjects/androiddemo/Androiddatabase';
// 打开sqlites数据库
var db = new sqlite3.Database(sqliteDbPath);
// all查询所有数据
// console.time('time a');
// db.all(`select * from student`, function (err, row) {
//   if (err) throw err;
//   else {
//     console.log(' ①all查询结果 ', row);
//     console.log('转换JSON', JSON.stringify(row)); //all所有的内容转成 JSON内容
//   }
// });
// console.timeEnd('time a');
// // each逐条查询数据,每一段会单独打印
// db.each('select * from student', function (err, row) {
//   if (err) throw err;
//   else {
//     console.log(' ②each查询结果：', row);
//   }
// });

// // 按条件查询
// db.each('select * from student where name=?', 'erik', function (err, row) {
//   //user 表头 username 数据库字段
//   if (err) throw err;
//   else {
//     console.log(' ③按条件查询 ', row);
//   }
// });

function getName() {
  var str = 'aporhjbmvncjrovmbxvzzoeclolmqlpvsdffgfgf';
  function ss(a, b) {
    var fanhui = '';
    for (var i = 0; i < b; i++) {
      var aa = Math.floor(Math.random() * str.length);
      fanhui += str.substring(aa, aa + 1);
    }
    return fanhui;
  }
  return ss(str, 4);
}

for (let i = 1; i < 200; i++) {
  db.each(
    `insert into student (id, name, age, gender,grade,class) values (?, ?,?,?, ?, ?)`,
    i, //id
    getName(),
    Math.round(Math.random() * 20 + 1), //age
    Math.round(Math.random() * 1 + 1), //gender
    Math.round(Math.random() * 10 + 1), //grade
    Math.round(Math.random() * 200 + 1), //class
    function (err, row) {
      //user 表头 username 数据库字段
      if (err) throw err;
      else {
        console.log(' ③按条件查询 ', row);
      }
    },
    function (err, row) {
      if (err) throw err;
      else {
        console.log('完成查询', row);
      }
    },
  );
}
// for (let i = 1; i < 200; i++) {
//   db.each(
//     `insert into class (id, name, type, stu_number) values (?, ?, ?,?)`,
//     i, //id
//     'class' + i, //name
//     Math.round(Math.random() * 5), //number
//     Math.round(Math.random() * 100), //number
//     function (err, row) {
//       //user 表头 username 数据库字段
//       if (err) throw err;
//       else {
//         console.log(' ③按条件查询 ', row);
//       }
//     },
//   );
// }

// // 关闭数据库
db.close();
