import plane from '../LoginPagePlane.png';
import skyConnect from '../SkyConnect_logo_transparent.png';
import styled from "styled-components";
import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import axios from "axios";
import '../App.css';

const url = "https://skyconnect-2b47.onrender.com";

let headerElement = ['User Id', 'User Name']

function ForgotPassword() {

    const [users, setUsers] = React.useState([]);
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
        getUsers();
    }, []);

    const getUsers = () => {
        axios.get(`${url}/allUsers`).then((getUsers) => {
            setUsers(getUsers.data);
            console.log(getUsers.data)
        }).catch((err) => { console.log(err) });
    };

    return (

    <>
        <Forgotpassword>

                <body style={{
                    backgroundImage: `url(${plane})`, backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: '100vw',
                    height: '100vh'
                }}>
            <div class="container">
                    <div class="container">
                        <div class="navbar">
                            <img src={skyConnect} className="App-logo" alt="logo" />
                            <nav>
                                <ul>
                                    <li><a href="HomePage.html">Home</a> </li>
                                    <li><a href="MyFlights.html">My Flights</a></li>
                                    <li><a href="About.html">About</a></li>
                                    <li><a href="SignIn.html">Sign In</a> </li>
                                </ul>
                            </nav>
                        </div>

                        <p>This page will be a forgot password form</p>
                    </div>
            </div>
                </body >

        </Forgotpassword>
        </>
    );
}

export default ForgotPassword;

const Forgotpassword = styled.body`
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
  
`;