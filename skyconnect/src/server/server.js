require("dotenv").config();
const express = require('express');
//const os = require('os');
const cors = require("cors");
const app = express();
const sql = require('mssql');
//const parser = require("body-parser");

app.use(cors({ origin: true, credentials: true }));
app.use(express.static("dist"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


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
        
        //console.log(`${resultSet.recordset.length} rows returned.`);

        // output column headers
        var columns = "";
        for (var column in resultSet.recordset.columns) {
            columns += column + ", ";
        }
        //console.log("%s\t", columns.substring(0, columns.length - 2));

        // ouput row contents from default record set
        resultSet.recordset.forEach(row => {
            console.log("%s\t%s", row.UserId, row.UserName);            
        });
        res.json(resultSet.recordset);
        //res.json(resultSet.recordsets);
        //console.log(resultSet);

        poolConnection.close();
  }
   catch (err) {
        console.log(err.message);
   }
})

app.get("/user/:UserId?", async (req, res) => {
    try {
        const { UserId } = req.params;
        console.log(req.params.UserId);
        console.log(req.body);

        var poolConnection = await sql.connect(dbConfig);//await sql.createConnection(config);

        if (UserId !== undefined) {
            var resultSet = await poolConnection.request().query(`Select * FROM SkyConnect.dbo.Users where UserId=${UserId}`,
                [
                    UserId
                ]);
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
        let userName = req.body[0].UserName;
        let userPassword = req.body[0].UserPassword;
        let userRole = req.body.UserRole;

            //console.log(userName);
        var poolConnection = await sql.connect(dbConfig);

        if (userName && userPassword) {
            var resultSet = await sql.poolConnection.request().query(
                `Select * From SkyConnect.dbo.Users where UserName=${userName} and UserPassword=${userPassword}`,
                [userName, userPassword]
            );
            console.log(req.body);
            res.json(resultSet.recordset[0]);
            
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
