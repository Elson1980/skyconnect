import styled from "styled-components";
import React, { useEffect, useState } from 'react';
import axios from "axios";
import '../App.css';

const url = "https://skyconnect-2b47.onrender.com";
//const url = "http://localhost:4002";

function MyFlights() {

    const [flightInput, setFlightInput] = useState('');
    const [filterInput, setFilterInput] = useState('');

    var myHeaders2 = new Headers();
    myHeaders2.append("Content-Type", "application/json");
    myHeaders2.append("Accept", "application/json");
    myHeaders2.append('Acces-Control-Allow-Origin', '*');
    myHeaders2.append('Access-Control-Allow-Methods', "DELETE, POST, GET, OPTIONS");
    myHeaders2.append("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Origin, X-Auth-Token");
    myHeaders2.append("Access-Control-Max-Age", "86400");

    const requestParams = new URLSearchParams({
        access_key: 'a9c3cf5e76572aa3e6273927d82a666b',
        limit: 10
    })

    let input, filter, flightInfo, p, i, txtValue;

    fetch(`http://api.aviationstack.com/v1/flights?${requestParams}`,
            {
                mode: 'no-cors',
                method: 'GET',
                headers: myHeaders2            

            })
        .then(response => response.json())
        .then(data => {
            data.data.forEach(flight => {
                const departureAirport = flight.departure.airport;
                const scheduledDeparture = new Date(flight.departure.scheduled).toLocaleString();
                const arrivalAirport = flight.arrival.airport;
                const airlineName = flight.airline.name || 'Not available';
                const flightNumber = flight.flight.number || 'Not available';
                
                const flightInfoDiv = document.getElementById("flightInfoContainer");
                const flightInfo = document.createElement("div");
                flightInfo.innerHTML = `
                    <p class="flight-number">Flight Number: ${flightNumber}</p>
                    <p class="airline">Airline: ${airlineName}</p>
                    <p class="departure">Departure Airport: ${departureAirport} (Scheduled: ${scheduledDeparture})</p>
                    <p class="arrival">Arrival Airport: ${arrivalAirport}</p>
                    <hr>
                `;
                flightInfoDiv.appendChild(flightInfo);
            });
        })
        .catch(error => {
            console.log('Error fetching flight data: ', error);
        });

    /* 
    function filterFlights() {
        let input, filter, flightInfo, p, i, txtValue;
        //input = document.getElementById('filterInput');
        filter = filterInput.toUpperCase();
        flightInfo = document.getElementById('flightInfoContainer');
        p = flightInfo.getElementsByTagName('p');
        for (i = 0; i < p.length; i++) {
            txtValue = p[i].textContent || p[i].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                p[i].style.display = '';
            } else {
                p[i].style.display = 'none';
            }
        }
    }*/

    function searchFlights() {
        
        //input = document.getElementById('searchInput').value;
        filter = flightInput.toUpperCase();

        fetch(`http://api.aviationstack.com/v1/flights?${requestParams}`,
            {
                mode: 'no-cors',
                method: 'GET',
                headers: myHeaders2  

            })
            .then(response => response.json())
            .then(data => {
                const filteredFlights = data.data.filter(flight => {
                    return (
                        flight.flight.iata.toUpperCase().includes(filter) ||
                        flight.airline.name.toUpperCase().includes(filter) ||
                        flight.departure.airport.toUpperCase().includes(filter) ||
                        flight.arrival.airport.toUpperCase().includes(filter)
                    );
                });

                const flightInfoDiv = document.getElementById('flightInfo');
                flightInfoDiv.innerHTML = '';

                filteredFlights.slice(0, 3).forEach(flight => {
                    const departureAirport = flight.departure.airport;
                    const scheduledDeparture = new Date(flight.departure.scheduled).toLocaleString();
                    const arrivalAirport = flight.arrival.airport;
                    const airlineName = flight.airline.name || 'Not available';
                    const flightNumber = flight.flight.iata || 'Not available';

                    const flightInfo = document.createElement('div');
                    flightInfo.innerHTML = `
                        <p class="flight-number">Flight Number: ${flightNumber}</p>
                        <p class="airline">Airline: ${airlineName}</p>
                        <p class="departure">Departure Airport: ${departureAirport} (Scheduled: ${scheduledDeparture})</p>
                        <p class="arrival">Arrival Airport: ${arrivalAirport}</p>
                        <hr>
                    `;
                    flightInfoDiv.appendChild(flightInfo);
                });
            })
            .catch(error => {
                console.log('Error fetching flight data: ', error);
            });
    }

    /* 


    fetch(`http://api.aviationstack.com/v1/flights?${requestParams}`)
        .then(response => response.json())
        .then(data => {
            data.data.forEach(flight => {
                const departureAirport = flight.departure.airport;
                const scheduledDeparture = new Date(flight.departure.scheduled).toLocaleString();
                const arrivalAirport = flight.arrival.airport;
                const airlineName = flight.airline.name || 'Not available';
                const flightNumber = flight.flight.number || 'Not available';

                const flightInfoDiv = document.getElementById('flightInfoContainer');
                const flightInfo = document.createElement('div');
                flightInfo.innerHTML = `
                    <p class="flight-number">Flight Number: ${flightNumber}</p>
                    <p class="airline">Airline: ${airlineName}</p>
                    <p class="departure">Departure Airport: ${departureAirport} (Scheduled: ${scheduledDeparture})</p>
                    <p class="arrival">Arrival Airport: ${arrivalAirport}</p>
                    <hr>
                `;
                flightInfoDiv.appendChild(flightInfo);
            });
        })
        .catch(error => {
            console.log('Error fetching flight data: ', error);
        });

    function filterFlights() {

        input = document.getElementById('filterInput');
        filter = input.value.toUpperCase();
        flightInfo = document.getElementById('flightInfoContainer');
        p = flightInfo.getElementsByTagName('p');
        for (i = 0; i < p.length; i++) {
            txtValue = p[i].textContent || p[i].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                p[i].style.display = '';
            } else {
                p[i].style.display = 'none';
            }
        }
    }

    function searchFlights() {
        let userInput = flightInput.toUpperCase();

       

        fetch(`http://api.aviationstack.com/v1/flights?${requestParams}`,
            {
                mode: 'cors',
                method: 'GET',
                credentials: "same-origin",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application / json"
                },               

            })
        .then(response => console.log(response.json()))
        .then(data => {

            const filteredFlights = data.data.filter(flight => {
                return (
                    flight.flight.iata.toUpperCase().includes(userInput) ||
                    flight.airline.name.toUpperCase().includes(userInput) ||
                    flight.departure.airport.toUpperCase().includes(userInput) ||
                    flight.arrival.airport.toUpperCase().includes(userInput)
                );
            });

            const flightInfoDiv = document.getElementById('flightInfo');
            flightInfoDiv.innerHTML = '';

            filteredFlights.slice(0, 3).forEach(flight => {
                const departureAirport = flight.departure.airport;
                const scheduledDeparture = new Date(flight.departure.scheduled).toLocaleString();
                const arrivalAirport = flight.arrival.airport;
                const airlineName = flight.airline.name || 'Not available';
                const flightNumber = flight.flight.iata || 'Not available';

                const flightInfo = document.createElement('div');
                flightInfo.innerHTML = `
                    <p className="flight-number">Flight Number: ${flightNumber}</p>
                    <p className="airline">Airline: ${airlineName}</p>
                    <p className="departure">Departure Airport: ${departureAirport} (Scheduled: ${scheduledDeparture})</p>
                    <p className="arrival">Arrival Airport: ${arrivalAirport}</p>
                    <hr>
                    `;
                flightInfoDiv.appendChild(flightInfo);
            });
        })
        .catch(error => {
            console.log('Error fetching flight data: ', error);
        });
    }
    */
 

    return (

        <>
            <MyflightsBody>

                <div className="row">
                    <div className="col">
                        <h1 id="title">Next Available Flights</h1>
                        
                            <input type="text" id="filterInput" onChange={(e) => { setFilterInput(e.target.value) }} placeholder="Filter"/>
                                <div id="flightInfoContainer"></div>
                        
                    </div>

                    <div className="col2">
                        <div className="form-box">
                            <h1 id="title">Search Flights</h1>
                            <input type="text" id="searchInput" placeholder="Search for flights, airlines, or airports..." />
                            <button onChange={(e) => { setFlightInput(e.target.value) }} onClick = { searchFlights() } > Search</button>
                                <div id="flightInfo"></div>
                        </div>
                    </div>
                </div>
              

            </MyflightsBody>
        </>
    );
}

export default MyFlights;

const MyflightsBody = styled.div`
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
    height: 100vh;
    background-position: center;
    background-size: cover;
    padding-right: 5%;
    padding-left: 5%;
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
    background: rgba(250, 250, 252, 0.2);
    padding: 50px 60px 70px;
}

.col2
{
    flex-basis: 50%;
}

h1
{
    display: flex;
    justify-content: center;
    font-size: 30px;
    margin-bottom: 60px;
    margin-top: -15px;
    color: #3c00a0;
    position: center;

}

p
{
    color: white;
    font-size: 11px;
    line-height: 15px;
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