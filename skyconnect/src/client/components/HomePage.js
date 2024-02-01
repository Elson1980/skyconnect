import skyConnect from '../SkyConnect_logo_transparent.png';
import styled from "styled-components";
import { Outlet, Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate, Navigate } from "react-router-dom";
import axios from "axios";
import '../App.css';

const url = "https://skyconnect-2b47.onrender.com";
//const url = "http://localhost:4002";

function HomePage() {
    const navigate = useNavigate();

    let headerElement = [
        'Flight Number', 'Departure Date', 'Departure Time',
        'Departure City', 'Arrival Date', 'Arrival Time', 'Arrival City', 'Purchase'
    ];

    const [columns, setColumns] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const [FlightDepartureCity, setFlightDepartureCity] = useState('');
    const [FlightArrivalCity, setFlightArrivalCity] = useState('');
    const [FlightDepartureDate, setFlightDepartureDate] = useState('');

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userFlightRequest = {
            FlightDepartureCity,
            FlightArrivalCity,
            FlightDepartureDate,
        }

        try {
            const response = await axios.post(`${url}/flights`, (userFlightRequest))
                .then(function (res) {
                    setColumns(res.data);
                })

        } catch (error) {
            console.error('Sign-in failed', error);
        }
    }

    return (

        <>
            <SearchFlights>

                             
                    <div className="row"> 
                        <div className="col">
                            <img src={skyConnect} className="App-logo" alt="logo" />
                            <h1>Book Now</h1>
                            <p>
                                Sign up now to get started booking your
                                next flight, or if you already have an account you
                                can sign in and manage existing flights or book new ones.
                                Thanks for choosing SkyConnect safe travels!
                            </p>
                        </div>

                    <div className="col2">
                        <div className="form-box">
                            <h1 id="title">Search Flights</h1>
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="from">From:</label>
                                <input
                                    type="text"
                                    id="from"
                                    name="from"
                                    value={FlightDepartureCity}
                                    placeholder="Departure city"
                                    onChange={(e) => { setFlightDepartureCity(e.target.value) }}
                                />

                                <label htmlFor="to">To:</label>
                                <input
                                    type="text"
                                    id="to"
                                    name="to"
                                    value={FlightArrivalCity}
                                    placeholder="Destination city"
                                    onChange={(e) => {setFlightArrivalCity(e.target.value)} }
                                />

                                <label htmlFor="depart">Departure Date:</label>
                                <input
                                    type="date"
                                    id="depart"
                                    name="depart"
                                    value={FlightDepartureDate}
                                    onChange={(e) => { setFlightDepartureDate(e.target.value) }}
                                />

                                <label htmlFor="return">Return Date:</label>
                                <input
                                    type="date"
                                    id="return"
                                    name="return"                                    
                                />

                                <label htmlFor="class">Class:</label>
                                <select id="class" name="class">
                                    <option value="economy">Economy</option>
                                    <option value="business">Business</option>
                                    <option value="first">First Class</option>
                                </select>

                                <button type="submit" id="flightsearch">Search Flights</button>
                            </form>


                        </div>
                    </div>            

                </div>
                <div>
                <TableContainer>
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
                                // console.log(column)                
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={column.FlightId}>
                                        {/* {columns.map((column, key, value) => {  
                       
                      console.log(value)               
                    return (
                      <> */}
                                        <TableCell key={column.FlightNumber}>
                                            {column.FlightNumber}
                                        </TableCell>
                                        <TableCell key={column.FlightDepartureDate}>
                                            {column.FlightDepartureDate}
                                        </TableCell>
                                        <TableCell key={column.FlightDepartureTime}>
                                            {column.FlightDepartureTime}
                                        </TableCell>
                                        <TableCell key={column.FlightDepartureCity}>
                                            {column.FlightDepartureCity}
                                        </TableCell>
                                        <TableCell key={column.FlightArrivalDate}>
                                            {column.FlightArrivalDate}
                                        </TableCell>
                                        <TableCell key={column.FlightArrivalTime}>
                                            {column.FlightArrivalTime}
                                        </TableCell>
                                        <TableCell key={column.FlightArrivalCity}>
                                            {column.FlightArrivalCity}
                                        </TableCell>
                                        <TableCell key={uuidv4()}>
                                            <button onClick={() => navigate('/Cart')}>Buy</button>
                                        </TableCell>
                        
                                        
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                    </TableContainer>


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
        </SearchFlights>
        </>
    );
}

export default HomePage;

const SearchFlights = styled.div`
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

.navbar
{
    height: 8%;
    display: flex;
    align-items: center;
}

.logo
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

.row
{
    display: flex;
    height: 88%;
    align-items: center;
}

.col
{
    flex-basis: 50%;
}

.col2
{
    flex-basis: 50%;
}

h1
{
    color: white;
    font-size: 75px;
    padding-left: 50px !important;
}

p
{
    color: white;
    font-size: 11px;
    line-height: 15px;
    padding-left: 50px !important;
}

img {
    padding-left: 20px;
}

.form-box
{
    height: 75%;
    width: 45%;
    position: absolute;
    top: 15%;
    left: 50%;
    background: rgba(250, 250, 252, 0.2);
    padding: 50px 60px 70px;
    text-align: center;
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

.col2 h1
{
    font-size: 30px;
    margin-bottom: 60px;
    margin-top: -15px;
    color: #3c00a0;
    position: relative;
}

label 
{
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
}

input, select 
{
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
}

button 
{
    background-color: #3c00a0;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font-size: 16px;
}

button:hover
{
    background-color: grey;
}

form
{
    margin-top: -40px;    
}
  
`;