import React, { useEffect, useState } from 'react';
import { Navigate } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
    
    return (
        <>
            <HeaderBody>
                    <div class="navbar">
                        <nav>
                            <ul>
                                <li><a href="/">Home</a> </li>
                                <li><a href="/MyFlights">My Flights</a> </li>
                                <li><a href="/About">About</a> </li>
                                <li><a href="/SignIn">Sign In</a> </li>
                            </ul>
                        </nav>
                    </div>
            </HeaderBody>
        </>
    );
}

export default Header;

const HeaderBody = styled.div`

.navbar
{
    height: 8%;
    display: flex;
    align-items: center;
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