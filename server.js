require("dotenv").config()
const express = require('express');
const os = require('os');
const cors = require("cors");
const app = express();
const sql = require('mssql');
const parser = require("body-parser");

app.use(cors({ origin: true, credentials: true }));
app.use(express.static("dist"));
app.use(parser.json());
app.use(express.urlencoded({ extended: false }));

const dbConfig = {
    user: process.env.URI_User, // better stored in an app setting such as process.env.DB_USER
    password: process.env.URI_Password, // better stored in an app setting such as process.env.DB_PASSWORD
    server: process.env.URI, // better stored in an app setting such as process.env.DB_SERVER
    port: 1433, // optional, defaults to 1433, better stored in an app setting such as process.env.DB_PORT
    database: process.env.URI_Database, // better stored in an app setting such as process.env.DB_NAME
    authentication: {
        type: 'default'
    },
    options: {
        encrypt: true
    }
}

app.get("/allUsers", async (req, res) => {
    try {
        var poolConnection = await sql.connect(dbConfig);//await sql.createConnection(config);
        var resultSet = await poolConnection.request().query(`Select * FROM SkyConnect.dbo.Users`);

        console.log(`${resultSet.recordset.length} rows returned.`);

        // output column headers
        var columns = "";
        for (var column in resultSet.recordset.columns) {
            columns += column + ", ";
        }
        console.log("%s\t", columns.substring(0, columns.length - 2));

        // ouput row contents from default record set
        resultSet.recordset.forEach(row => {
            console.log("%s\t%s", row.UserId, row.UserName);            
        });
        res.json(resultSet.recordset);
        //res.json(resultSet.recordsets);
        console.log(resultSet);

        poolConnection.close();
  }
   catch (err) {
        console.log(err.message);
   }
})

app.get("/user/:id?", async (req, res) => {
    try {

        const { id } = req.params;

        var poolConnection = await sql.connect(dbConfig);//await sql.createConnection(config);

        if (id !== undefined) {
            var resultSet = await poolConnection.request().query("Select * FROM SkyConnect.dbo.Users where id = $1",
                [
                    req.params.id
                ]);
            console.log(id);
            res.json(resultSet.recordset);
        }        

        poolConnection.close();
    }
    catch (err) {
        console.log(err.message);
    }
})

app.post("/newLogin", async (req, res) => {
    try {
        var poolConnection = await sql.connect(dbConfig);//await sql.createConnection(config);
        var resultSet = await poolConnection.request().query(`Select * FROM SkyConnect.dbo.Users`);

        console.log(`${resultSet.recordset.length} rows returned.`);

        // output column headers
        var columns = "";
        for (var column in resultSet.recordset.columns) {
            columns += column + ", ";
        }
        console.log("%s\t", columns.substring(0, columns.length - 2));

        // ouput row contents from default record set
        resultSet.recordset.forEach(row => {
            console.log("%s\t%s", row.UserId, row.UserName);
        });
        res.json(resultSet.recordset);
        //res.json(resultSet.recordsets);
        console.log(resultSet);

        poolConnection.close();
    }
    catch (err) {
        console.log(err.message);
    }
})

app.listen(process.env.ServerPort || 4000, () =>
    console.log(`Listening on port ${process.env.ServerPort || 4000}!`)
);
