import styled from "styled-components";
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import '../App.css';

const url = "https://skyconnect-2b47.onrender.com";
//const url = "http://localhost:4002";
    let headerElement = [ 'User Id',
        'Agent Name', 'Agent Sales'
    ];

const AgentMangementTab = () => {
    
    const [columns, setColumns] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);



    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    React.useEffect(() => {
        displayAgentSales();
    }, []);

    const displayAgentSales = () => {       
        
            axios.get(`${url}/agentSales`)
                .then(function (res) {
                    setColumns(res.data[0]);  
                })
    }

    return (
        <>
        <AgentManagement>

                <div className="Tabs">

                    <br />
                    <br />

                    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                        <TableContainer sx={{ maxHeight: 440 }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {headerElement.map((header) => {
                                        return (
                                            <TableCell
                                                key={header}
                                            //   align={header.align}
                                            //   style={{ minWidth: header.minWidth }}
                                            >
                                                {header}
                                            </TableCell>
                                        )
                                    })}
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                    {columns.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((column) => {
                                                   
                                        return (
                                            <TableRow hover role="checkbox" tabIndex={-1} key={uuidv4()}>
                                            {/* {columns.map((column, key, value) => {  
                       
                      console.log(value)               
                    return (
                      <> */}
                                                <TableCell style={{ width: 50 }} key={column.UserId}>
                                                {column.UserId}
                                            </TableCell>
                                                <TableCell style={{ width: 50 }} key={column.UserFirstName}>
                                                {column.UserFirstName}
                                            </TableCell>
                                                <TableCell style={{ width: 50 }} key={column.AgentSales}>
                                                {column.AgentSales}
                                            </TableCell>

                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                        </TableContainer>
                    </Paper>

                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={columns.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                  


                </div>

        </AgentManagement>
        </>

    );
};
export default AgentMangementTab;

const AgentManagement = styled.div`
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;

*
{
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
}

.container
{
    width: 100%;
    height:100vh;
    background-image: linear-gradient(rgba(0,0,50,0), rgba(0,0,50,0.8));
    background-position: center;
    background-size: cover;
    position: relative;
}

.form-box
{
    height: 50%;
    width: 90%;
    max-width: 450px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%); 
    background: rgba(250, 250, 252, 0.5);
    padding: 50px 60px 70px;
    text-align: center;
}

.form-box h1
{
    font-size: 30px;
    margin-bottom: 60px;
    color: #3c00a0;
    position: relative;
    margin-top: -30px;
}

.form-box h1::after
{
    content: '';
    width: 100px;
    height: 4px;
    border-radius: 3px;
    background: #3c00a0;
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translatex(-50px);
}

.input-field
{
    background: #eaeaea;
    margin: 15px 0;
    border-radius: 5px;
    display: flex;
    align-items: center;
    max-height: 65px;
    overflow: hidden;
}

.input-field button
{
    border: 0;
    margin-right: 10px;
}

input
{
    width: 100%;
    background: transparent;
    border: 0;
    outline: 0;
    padding: 15px 20px;
}

.input-field i
{
    margin-left: 15px;
    color: #111;
}

.btn-field
{
    width: 100%;
    display: flex;
    justify-content: center;

}

.btn-field button
{
    flex-basis: 48%;
    background: #3c00a0;
    color: #fff;
    height: 40px;
    border-radius: 20px;
    border-color: #555;
    outline: 0;
    cursor: pointer;
    transition: background 1s;
    margin-top: -70px;
}

.input-group
{
    height: 280px;
}

.navbar
{
    height: 8%;
    display: flex;
    align-items: center;
}

.App-logo
{
    width: 50px;
    cursor: pointer;    
}

nav
{
    flex: 1;
    text-align: right;  
    margin-right: 30px;  
}

nav ul li
{
    list-style: none;
    display: inline-block;
    margin-left: 60px;    
}

nav ul li a
{
    text-decoration: none;
    color: white;
    font-size: 13px;    
}
  
`;

