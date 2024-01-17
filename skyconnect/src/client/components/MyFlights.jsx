import skyConnect from '../SkyConnect_logo_transparent.png';
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

                    <div className="container">
                        <div className="container">


                            <p>This page will show all of a specific customers
                                flights that they have booked.</p>
                        </div>
                    </div>
              

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