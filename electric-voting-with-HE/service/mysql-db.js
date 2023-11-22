var mysql=require('mysql');
var connection=mysql.createConnection({
  host:'localhost',
  port:3306,
  user:'root',
  password:'1234',
  database:'mydb'
});

connection.connect((err) => {
  if(err) {
    console.log('Error connecting to DB', err);
    return;
  }
  console.log('Connection established');
});

module.exports=connection;