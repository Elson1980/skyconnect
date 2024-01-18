require("dotenv").config();
const express = require('express');
//const os = require('os');
const cors = require("cors");
const app = express();
const sql = require('mssql');
const parser = require("body-parser");
//const { PassThrough } = require("stream");
//const bcrypt = require('bcryptjs');

app.use(express.static("dist"));
app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));
app.use(cors({
    origin: "*",
    credentials: true,
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"],
}));

//app.use(session({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));


const dbConfig = {
    user: process.env.URI_User, 
    password: process.env.URI_Password, 
    server: process.env.URI, 
    port: 1433, 
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
        let userName = req.body[0].UserName;
        let userPassword = req.body[0].UserPassword;

        var poolConnection = await sql.connect(dbConfig);
    try {       
        
            var resultSet = await poolConnection.request().input('UserName', sql.VarChar, userName).input('UserPassword', sql.VarChar, userPassword).query('Select * FROM SkyConnect.dbo.Users where UserName=@userName and UserPassword=@userpassword');
            //req.session.user = username;
            //res.redirect('/HomePage');
         
        if (resultSet != null) {
                res.json(resultSet.recordset);
            } else {
                res.send('Invalid Credentials. Please Try Again.');
            }            
        
        poolConnection.close();
    }
    catch (err) {
        console.log(err.message);
        res.status(500).send('Internal Server Error');
    }
});

//app.get('/HomePage', (req, res) => {
//    if (req.session.user) {
//        res.send(`Welcome, ${req.session.user}!`);
//    } else {
 //       res.redirect('/');
//    }
//})

app.post("/signUp", async (req, res) => {


    try {
        const newUser = await poolConnection
            .request()
            .input('UserName', sql.VarChar, userName)
            .input('UserPassword', sql.VarChar, userPassword)
            .query('Select * FROM SkyConnect.dbo.Users where UserName=@userName and UserPassword=@userpassword');


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
