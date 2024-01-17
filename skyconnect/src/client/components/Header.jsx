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
                            <li><Link to="/">Home</Link> </li>
                            <li><Link to="MyFlights">My Flights</Link> </li>
                            <li><Link to="About">About</Link> </li>
                            <li><Link to={'./SignIn'} >Sign In</Link> </li>
                            </ul>
                        </nav>
                    </div>
            </HeaderBody>
        </>
    );
}

export default Header;

const HeaderBody = styled.body`

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