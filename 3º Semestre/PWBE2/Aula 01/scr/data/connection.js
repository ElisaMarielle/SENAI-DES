const mysql2 = require("mysql2/promise");

const con = mysql2.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "teste"
});

module.exports = con;