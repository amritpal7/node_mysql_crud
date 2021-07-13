import express from "express";
import logger from "morgan";
import mysql from "mysql";

const dbCon = mysql.createConnection({
  host: "127.0.0.1",
  user: "amrit",
  password: "123456",
  database: "amrit",
});

dbCon.connect((err) => {
    if(err){
        throw err
    }else{
        console.log('Db connected!');
    }
})
const app = express();

app.use(logger("tiny"));

app.use(express.json());

dbCon.query("SELECT * FROM users", ( err, rows) => {
    if(err) throw err
    console.log("Data recieved from DB:");
    console.log(rows);
})





app.listen(3000, () => console.log("Server running!"));
