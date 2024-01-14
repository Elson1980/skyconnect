require("dotenv").config();
const express = require('express');
//const os = require('os');
const cors = require("cors");
const app = express();
const sql = require('mssql');
const parser = require("body-parser");
//const bcrypt = require('bcryptjs');

app.use(cors({ origin: true, credentials: true }));
app.use(express.static("dist"));
app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));


const dbConfig = {
    user: process.env.URI_User, 
    password: process.env.URI_Password, 
    server: process.env.URI, 
    port: parseInt(process.env.URI_Port), 
    database: process.env.URI_Database, 
    authentication: {
        type: 'default'
    },
    options: {
        encrypt: true
    }
}

app.get("/allUsers", async (req, res) => {
    try {
        var poolConnection = await sql.connect(dbConfig);
        var resultSet = await poolConnection.request().query(`Select * FROM SkyConnect.dbo.Users`); 
        res.json(resultSet.recordsets);
        poolConnection.close();
  }
   catch (err) {
        console.log(err.message);
   }
})

app.get("/user/:UserId?", async (req, res) => {
    try {
        const { UserId } = req.params;

        var poolConnection = await sql.connect(dbConfig);//await sql.createConnection(config);

        if (UserId !== undefined) {
        var resultSet = await poolConnection.request().input('UserId', sql.Int, UserId).query('Select * FROM SkyConnect.dbo.Users where UserId=@UserId');  
            res.json(resultSet.recordset);
        }

        poolConnection.close();
    }
    catch (err) {
        console.log(err.message);
    }
})

app.post("/login", async (req, res) => {

    
    try {

        const { UserName } = req.body;
        const { UserPassword } = req.body;        

        var poolConnection = await sql.connect(dbConfig);

        if (req.body != null) {

            var resultSet = await poolConnection.request().input('UserName', sql.VarChar, UserName).input('UserPassword', sql.VarChar, UserPassword).query('Select * FROM SkyConnect.dbo.Users where UserName=@UserName and UserPassword=@Userpassword');  


            console.log(req.body[0]);
            res.json(resultSet.recordset);
            
        }
        poolConnection.close();
    }
    catch (err) {
        console.log(err.message);
    }
    

});

app.post("/test", async (req, res) => {       
    console.log(req.body)
});

app.listen(process.env.ServerPort || 4000, () =>
    console.log(`Listening on port ${process.env.ServerPort || 4000}!`)
);
