import mysql from "mysql";

//configuracao banco de dados
export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "2024",
    database: "crud",
});