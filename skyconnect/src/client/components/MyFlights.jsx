import plane from '../LoginPagePlane.png';
import skyConnect from '../SkyConnect_logo_transparent.png';
import Header from './Header.jsx';
import styled from "styled-components";
import { Outlet, Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from "axios";
import '../App.css';

const url = "https://skyconnect-2b47.onrender.com";

function MyFlights() {



    return (

        <>
            <Myflights>

                <body style={{
                    backgroundImage: `url(${plane})`, backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: '100vw',
                    height: '100vh'
                }}>
                    <div class="container">
                        <div class="container">
                            <Header />

                            <p>This page will show all of a specific customers
                                flights that they have booked.</p>
                        </div>
                    </div>
                </body >

            </Myflights>
        </>
    );
}

export default MyFlights;

const Myflights = styled.body`
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