import styled from "styled-components";
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../App.css';
import { sign } from "crypto";
//import { sign } from "crypto";

const url = "https://skyconnect-2b47.onrender.com";
//const url = "http://localhost:4002";


function FlightManagementTab() {

    let headerElement = [
        'Flight Number', 'Departure Date', 'Departure Time',
        'Departure City', 'Arrival Date', 'Arrival Time', 'Arrival City'
    ];

    const [columns, setColumns] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const [FlightNumber, setFlightNumber] = useState('');
    const [FlightCompany, setFlightCompany] = useState('');
    const [FlightDepartureDate, setFlightDepartureDate] = useState('');
    const [FlightDepartureTime, setFlightDepartureTime] = useState('');
    const [FlightDepartureLocation, setFlightDepartureLocation] = useState('');
    const [FlightDepartureCity, setFlightDepartureCity] = useState('');
    const [FlightArrivalDate, setFlightArrivalDate] = useState('');
    const [FlightArrivalTime, setFlightArrivalTime] = useState('');
    const [FlightArrivalLocation, setFlightArrivalLocation] = useState('');
    const [FlightArrivalCity, setFlightArrivalCity] = useState('');
    const [FlightSeatsAvailable, setFlightSeatsAvailable] = useState('');
    const [FlightPrice, setFlightPrice] = useState('');
    const [FlightStatus, setFlightStatus] = useState('');
    const [FlightBookingAgent, setFlightBookingAgent] = useState('');

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleAgentSales = async (e) => {

    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const adminFlightChange = {
            FlightNumber,
            FlightCompany,
            FlightDepartureDate,
            FlightDepartureTime,
            FlightDepartureLocation,
            FlightDepartureCity,
            FlightArrivalDate,
            FlightArrivalLocation,
            FlightArrivalCity,
            FlightSeatsAvailable,
            FlightPrice,
            FlightStatus,
            FlightBookingAgent,
        }

        try {
            const response = await axios.post(`${url}/flightManagement`, (adminFlightChange))
                .then(function (res) {
                    setColumns(res.data);
                    console.log(res.data);
                })

        } catch (error) {
            console.error('Failed to add flight', error);
            alert('Failed');
        }
    };

    return (

        <>
            <FlightManagement>
                <br /><br /><br /><br />
                <div className="FirstTab">
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <div className="input-field" id="nameField">
                                <i className="fa-solid fa-user"></i>
                                <input
                                    type="text"
                                    value={FlightNumber}
                                    placeholder="Flight Number"
                                    onChange={(e) => { setFlightNumber(e.target.value) }} />
                            </div>
                            <div className="input-field" id="nameField">
                                <i className="fa-solid fa-user"></i>
                                <input type="text"
                                    value={FlightCompany}
                                    placeholder="Flight Company"
                                    onChange={(e) => { setFlightCompany(e.target.value) }} />
                            </div>

                            <div className="input-field">
                                <i className="fa-solid fa-envelope"></i>
                                <input type="date"
                                    id="departuredate"
                                    value={FlightDepartureDate}
                                    placeholder="Departure Date"
                                    onChange={(e) => { setFlightDepartureDate(e.target.value) }} />
                            </div>

                            <div className="input-field" id="time">
                                <i className="fa-solid fa-phone"></i>
                                <input
                                    type="text"
                                    value={FlightDepartureTime}
                                    placeholder="time"
                                    onChange={(e) => { setFlightDepartureTime(e.target.value) }} />
                            </div>

                            <div className="input-field" id="nameField">
                                <i className="fa-solid fa-user"></i>
                                <input type="text"
                                    value={FlightDepartureLocation}
                                    placeholder="Flight Departure Location"
                                    onChange={(e) => { setFlightDepartureLocation(e.target.value) }} />
                            </div>

                            <div className="input-field" id="nameField">
                                <i className="fa-solid fa-user"></i>
                                <input type="text"
                                    value={FlightDepartureCity}
                                    placeholder="Flight Departure City"
                                    onChange={(e) => { setFlightDepartureCity(e.target.value) }} />
                            </div>

                            <div className="input-field">
                                <i className="fa-solid fa-envelope"></i>
                                <input type="date"
                                    id="arrivaldate"
                                    value={FlightArrivalDate}
                                    placeholder="Arrival Date"
                                    onChange={(e) => { setFlightArrivalDate(e.target.value) }} />
                            </div>

                            <div className="input-field" id="time">
                                <i className="fa-solid fa-phone"></i>
                                <input
                                    type="text"
                                    value={FlightArrivalTime}
                                    placeholder="Arrival Time"
                                    onChange={(e) => { setFlightArrivalTime(e.target.value) }} />
                            </div>

                            <div className="input-field" id="nameField">
                                <i className="fa-solid fa-user"></i>
                                <input type="text"
                                    value={FlightArrivalLocation}
                                    placeholder="Arrival Location"
                                    onChange={(e) => { setFlightArrivalLocation(e.target.value) }} />
                            </div>

                            <div className="input-field">
                                <i className="fa-solid fa-envelope"></i>
                                <input type="text"
                                    id="Arrival City"
                                    value={FlightArrivalCity}
                                    placeholder="Arrival City"
                                    onChange={(e) => { setFlightArrivalCity(e.target.value) }} />
                            </div>

                            <div className="input-field" id="seatsField">
                                <i className="fa-solid fa-user"></i>
                                <input type="number"
                                    value={FlightSeatsAvailable}
                                    placeholder="Seats Available"
                                    onChange={(e) => { setFlightSeatsAvailable(e.target.value) }} />
                            </div>

                            <div className="input-field" id="seatsField">
                                <i className="fa-solid fa-user"></i>
                                <input type="number"
                                    value={FlightPrice}
                                    placeholder="Flight Price"
                                    onChange={(e) => { setFlightPrice(e.target.value) }} />
                            </div>

                            <div className="input-field" id="flightStatus">
                                <i className="fa-solid fa-user"></i>
                                <input type="number"
                                    value={FlightStatus}
                                    placeholder="Flight Status"
                                    onChange={(e) => { setFlightStatus(e.target.value) }} />
                            </div>

                            <div className="input-field" id="seatsField">
                                <i className="fa-solid fa-user"></i>
                                <input type="number"
                                    value={FlightBookingAgent}
                                    placeholder="Flight Booking Agent"
                                    onChange={(e) => { setFlightBookingAgent(e.target.value) }} />
                            </div>


                            
                        </div>
                        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                        <br /><br /><br /><br /><br /><br /><br /><br />
                        <div className="btn-field">
                            <button type="submit" id="signupBtn">Add Flight</button>
                        </div>

                    </form>
                </div>

            </FlightManagement>
        </>
    );
}

export default FlightManagementTab;

const FlightManagement = styled.div`
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

